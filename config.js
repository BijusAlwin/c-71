import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyDcRXEeXMp71QQOCy_Q3Vkn92KOCfOyZLE",
    authDomain: "c-71-faf21.firebaseapp.com",
    projectId: "c-71-faf21",
    storageBucket: "c-71-faf21.appspot.com",
    messagingSenderId: "667226609789",
    appId: "1:667226609789:web:22fa474f0dfffb7ec57914"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
