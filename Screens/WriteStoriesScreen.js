import React from 'react'; 
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView} from 'react-native'; 
import firebase from 'firebase';
import db from '../config';

import AppHeader1 from '../Screens/AppHeader1'

export default class WriteStoriesScreen extends React.Component{
    constructor(){
      super();
      this.state={
        story:'',
        author:'',
        storyTitle:'',
        allStories:[]
      }
  }
submitStory= async ()=>{
    const {storyTitle} = this.state.storyTitle
  if(this.state.story!==''){
     db.collection("All stories").add({
   'storyTitle':this.state.storyTitle,
   'author':this.state.author,
   'story':this.state.story,
  
 })

 
 
  }  
}

  retriveStories = async() =>{
    const Stories_Refer_Firestore_Docs = await db.collection("All stories").get();
       Stories_Refer_Firestore_Docs.docs.map((doc)=>{
            this.setState({
                allStories : [...this.state.allStories, doc.data()], 
            })
        });
        console.log(this.state.allStories[0].author);
}        
    render(){
        return(

        
          <KeyboardAvoidingView>
        
            <AppHeader1/>
             <TextInput style={{
                 borderWidth:4,
                 borderRadius:2,
                 height:50,
                 width:1300,
                 margin:10
             }}
            placeholder = "Story Title"
            onChangeText={(storyTitle) => {
            this.setState({ storyTitle: storyTitle });
          }}
          value={this.state.storyTitle}
            />

             <TextInput style={{
                 borderWidth:4,
                 borderRadius:2,
                 height:50,
                 width:1300,
                 margin:10
             }}
            placeholder = "Author"
            onChangeText={(author) => {
            this.setState({ author: author });
          }}
          value={this.state.author}
            />

            <TextInput style={{
                  borderWidth:4,
                  borderRadius:2,
                  height:220,
                  width:1300,
                  margin:10
            }}
            placeholder = "WriteStory here"
            onChangeText={(story) => {
            this.setState({ story:story });
          }}
          value={this.state.story}
            />

            <TouchableOpacity style={styles.button} onPress={()=>{
              this.submitStory();
              this.retriveStories();
            
            }}>
            <Text>Submit</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    
        )
    }
}


const styles=StyleSheet.create({
  
  button:{
   backgroundColor:"green",
   borderWidth:2,
   borderRadius:20,
   marginTop:20,
   alignItems:"center",
   justifyContent:"center",
   width:100,
   height:45,
   marginLeft:600
  }
})