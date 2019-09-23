import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

//lên Firebase setting lấy sdk, nhớ enable sign-in method trong authentication
const config = {
    apiKey: "AIzaSyDQBr1i4PmGTdaASEEp5zPjH4Of3a-3aTA",
    authDomain: "banhangonline-db.firebaseapp.com",
    databaseURL: "https://banhangonline-db.firebaseio.com",
    projectId: "banhangonline-db",
    storageBucket: "",
    messagingSenderId: "726271593547",
    appId: "1:726271593547:web:9c2eb2ff8861984bf091ce"
};

// các bước cơ bản để add firebase vào web
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// bước để add google authentication sign-in vào web
const provider = new firebase.auth.GoogleAuthProvider();

//luôn luôn trigger pop-up khi mà sử dụng google auth provider
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

//bước nhét prop trên Auth sang Database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    //QueryReference chỉ để cho ta biết thông tin, và còn dùng để get hay set data trên firestore
    //QuerySnapshot thì cho ta biết data

    //DocReference thì dùng CRUD dc, set() get() update() delete()

    //B1 : lấy thông tin vị trí từ firestore => DocReference (query reference)
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //B2 : sau đó mới get() sẽ lấy ra 1 cái snapshot object từ cái vị trí doc đó => DocSnapshot ref back to DocReference
    const snapShot = await userRef.get();

    //B3 : xem có data tại nơi doc đó chưa nếu chưa có thì tạo 
    if (!snapShot.exists) {
        const {
            displayName,
            email
        } = userAuth;

        const createdAt = new Date();

    //B4 : đẩy lên fire store
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

export default firebase;