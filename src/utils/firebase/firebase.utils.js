import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAp5XHv8HL5lKFo8Ws-bBDK_cVLdd9sbp8",
    authDomain: "portfolio-clothing.firebaseapp.com",
    projectId: "portfolio-clothing",
    storageBucket: "portfolio-clothing.appspot.com",
    messagingSenderId: "121380193377",
    appId: "1:121380193377:web:7d682c21ea58e567555620"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', 'userAuth.uid');

    console.log(userDocRef);

    const userSnapshot = await (getDoc(userDocRef));
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
          console.log('error creating the user', error.message)
        }
    }
    // if user data does not exist
    // create / set the document with data from userAuth in the collection

    // if user data exists
    // return userDocRef
}


