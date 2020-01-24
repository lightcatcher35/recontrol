import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBPlZlQ-pvJa5wNFA_MZ7koqxmCB74sZeQ",
  authDomain: "engelsiz-platform.firebaseapp.com",
  databaseURL: "https://engelsiz-platform.firebaseio.com",
  projectId: "engelsiz-platform",
  storageBucket: "engelsiz-platform.appspot.com",
  messagingSenderId: "78371705173",
  appId: "1:78371705173:web:01187def35110e0fd15fdc"
};
  // Initialize Firebase

const fire=firebase.initializeApp(firebaseConfig);

export default fire;

export const errors={
  "auth/user-not-found":"Kullanıcı bulunamadı"
}