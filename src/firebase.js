// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCugolg6fX86yV4mpNr8aVzYuZVAR1RHx8",
    authDomain: "test-80e8b.firebaseapp.com",
    databaseURL: "https://test-80e8b.firebaseio.com",
    projectId: "test-80e8b",
    storageBucket: "test-80e8b.appspot.com",
    messagingSenderId: "893143900884",
    appId: "1:893143900884:web:9f200f160b7f4009f81141",
    measurementId: "G-GPTWVDQH01"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = new firebase.firestore();

export {firestore}