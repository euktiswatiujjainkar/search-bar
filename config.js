import firebase from 'firebase';
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCUhQCJ9pRnHxdV4tHfzLQKeIUndfoNCH8",
  authDomain: "bed-time-stories---search-part.firebaseapp.com",
  databaseURL: "https://bed-time-stories---search-part.firebaseio.com",
  projectId: "bed-time-stories---search-part",
  storageBucket: "bed-time-stories---search-part.appspot.com",
  messagingSenderId: "670479992564",
  appId: "1:670479992564:web:ae8fb43803fdf9d21980a1",
  measurementId: "G-P6540Y03CM"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();

