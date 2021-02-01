import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5EUfpYVzlqUThUOlPbPAjdS_eWtsK-jk",
  authDomain: "pixabay2-1bb19.firebaseapp.com",
  projectId: "pixabay2-1bb19",
  storageBucket: "pixabay2-1bb19.appspot.com",
  messagingSenderId: "1005517379151",
  appId: "1:1005517379151:web:52de2704ee5ac7603fbc3a"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}