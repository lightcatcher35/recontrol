import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCzMKMdPnJIXFmCaOKrJsoZKJM3BSIbTN4",
    authDomain: "reauth-d8a16.firebaseapp.com",
    databaseURL: "https://reauth-d8a16.firebaseio.com",
    projectId: "reauth-d8a16",
    storageBucket: "reauth-d8a16.appspot.com",
    messagingSenderId: "256909589232",
    appId: "1:256909589232:web:12f495291c8e9398772035"
  };
  // Initialize Firebase

const fire=firebase.initializeApp(firebaseConfig);

export default fire;