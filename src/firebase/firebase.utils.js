import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCgtHZ3lZX4xx44NgSusUOT-kYTCV8WLls",
  authDomain: "aio-clothing.firebaseapp.com",
  databaseURL: "https://aio-clothing.firebaseio.com",
  projectId: "aio-clothing",
  storageBucket: "aio-clothing.appspot.com",
  messagingSenderId: "514406001854",
  appId: "1:514406001854:web:05f7eda9f129a4a9c182ef",
  measurementId: "G-6CE254DBSK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;