/* import * as firebase from 'firebase/app';
import "firebase/firestore"
import {initializeApp} from 'firebase/app'; */



import firebase from 'firebase';


// import firebase from "firebase/firebase-app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJOm7dpeROF1evhhXQbdYHaancEJliENQ",
  authDomain: "twitter-e7066.firebaseapp.com",
  databaseURL: "https://twitter-e7066-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "twitter-e7066",
  storageBucket: "twitter-e7066.appspot.com",
  messagingSenderId: "637285474805",
  appId: "1:637285474805:web:0ea81bda4e0b48850b40bc",
  measurementId: "G-78B8P1TBMD",
};
/* 
const firebaseApp = initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db; */

// Initialize Firebase
// let db = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase;