// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite"
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCgH7vq9l5eshwb4SlcoIYdmg_ftDLI0JY",
    authDomain: "react-netflix-4aa4a.firebaseapp.com",
    projectId: "react-netflix-4aa4a",
    storageBucket: "react-netflix-4aa4a.appspot.com",
    messagingSenderId: "1057328554836",
    appId: "1:1057328554836:web:e4e067365bc2f235d49ec1",
    measurementId: "G-PXF9F6ZSM1"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;