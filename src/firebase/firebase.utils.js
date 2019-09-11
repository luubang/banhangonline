import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDQBr1i4PmGTdaASEEp5zPjH4Of3a-3aTA",
    authDomain: "banhangonline-db.firebaseapp.com",
    databaseURL: "https://banhangonline-db.firebaseio.com",
    projectId: "banhangonline-db",
    storageBucket: "",
    messagingSenderId: "726271593547",
    appId: "1:726271593547:web:9c2eb2ff8861984bf091ce"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;