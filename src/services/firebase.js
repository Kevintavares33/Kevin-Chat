import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB-VgaQPHU0THxlyIXC7zUVxmQpXcfYLMM",
    authDomain: "kevin-chatt.firebaseapp.com",
    projectId: "kevin-chatt",
    storageBucket: "kevin-chatt.appspot.com",
    messagingSenderId: "87763268306",
    appId: "1:87763268306:web:3ad889ed2b82d1d1eab30b"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, db, provider };
