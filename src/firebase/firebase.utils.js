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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {
            displayName,
            email
        } = userAuth;

        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }


    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;