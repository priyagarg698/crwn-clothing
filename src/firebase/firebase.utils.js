import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyBwRaKzQRThTizQWtekF3MoSoGfYUtG8AE",
    authDomain: "crwn-db-a043f.firebaseapp.com",
    projectId: "crwn-db-a043f",
    storageBucket: "crwn-db-a043f.appspot.com",
    messagingSenderId: "730281078133",
    appId: "1:730281078133:web:79a351cdfb48971c7bb73c",
    measurementId: "G-ST09YNMPD4"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // console.log(snapShot)
    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log("error creating user", error.message)
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