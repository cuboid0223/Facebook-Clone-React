import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCaDRhHNBrjRGCQ5RWm-GcEfbuK_dJq3ew",
    authDomain: "facebook-clone-51700.firebaseapp.com",
    databaseURL: "https://facebook-clone-51700.firebaseio.com",
    projectId: "facebook-clone-51700",
    storageBucket: "facebook-clone-51700.appspot.com",
    messagingSenderId: "361893699767",
    appId: "1:361893699767:web:92c08d52f0d7685778ad32",
    measurementId: "G-HLCX8B2J77"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export  {auth, provider};
export default db;

//
