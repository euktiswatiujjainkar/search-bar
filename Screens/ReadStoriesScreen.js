import React from 'react'; 
import { StyleSheet, Text, View ,TextInput,Image,ScrollView,Button,FlatList} from 'react-native'; 
import { SearchBar } from 'react-native-elements';
import AppHeader from '../Screens/AppHeader'
import db from '../config'


export default class ReadStoriesScreen extends React.Component{
    constructor(){
        super();
        this.state={
          search:"",
          allStories:[],
          
        }
    }
  

 //retrive 
    retriveStories = async() =>{
    const Stories_Refer_Firestore_Docs = await db.collection("All stories").get();
       Stories_Refer_Firestore_Docs.docs.map((doc)=>{
            this.setState({
                allStories : [...this.state.allStories, doc.data()], 
            })
        });
}        
 componentDidMount = async()=>{
        this.retriveStories();

    }


    Search_Filter_Function = async() =>{
         const titles_Refer_Firestore = await db.collection("All stories")
         .where("storyTitle","==",this.state.search).get()
          var searchStory = titles_Refer_Firestore
    
    }
    

    render(){
        
      const renderItem = ({ allStories }) => (
     <View style={styles.item}>
    <Text style={styles.title}>{"title:"+this.state.allStories[0].storyTitle}</Text>
     <Text style={styles.title}>{"author:"+this.state.allStories[0].author}</Text>
     </View>
);

 const Searching_Item = ({ allStories }) => (
     <View style={styles.item}>
    <Text style={styles.title}>{"title:"+this.state.allStories[0].storyTitle}</Text>
     <Text style={styles.title}>{"author:"+this.state.allStories[0].author}</Text>
     </View>
);

     if(this.state.search===''){
         return(
            <ScrollView style={{backgroundColor:"blue",height:700}}>
            <AppHeader/>
            <SearchBar 
            onChangeText={(search)=>{
            this.setState({search:search})
            }}
            value={this.state.search}
            placeHolder = "Search Bar"
           
            />
            <View>
             <Text style = {{fontSize:30,textAlign:"center",}}> 
             Latest Story that has Updated</Text>

             <FlatList
             data={this.state.allStories}
             renderItem={Searching_Item}
        
             />
            </View>
            
            </ScrollView>
        )
     } else if(this.state.search!==''){
         return(
            <ScrollView style={{backgroundColor:"blue",height:700}}>
            <AppHeader/>
            <SearchBar 
            onChangeText={(search)=>{
            this.setState({search:search})
            }}
            value={this.state.search}
            placeHolder = "Search Bar"
           
            />
            <View>
           

             <FlatList
             data={this.state.allStories}
             renderItem={renderItem}
        
             />
            </View>
            
            </ScrollView>
        )
     }
    }
}

const styles = StyleSheet.create({
     textInput:{
      borderWidth:4,
      borderRadius:2,
      width:450,
      height:50,
      marginTop:20,
      marginLeft:450
    },

    text:{
         fontSize:22,
         textAlign:"center",
         marginTop:180,
    },
     
   logo:{
       marginLeft:1100,
       marginTop:-100,
       width:100,
       height:100,
       borderWidth:1,
      borderRadius:100,
   },
   logo1:{
       marginLeft:200,
       marginTop:-470,
       width:100,
       height:100,
       borderWidth:1,
      borderRadius:100,
   },
    item: {
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
})