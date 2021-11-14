
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBEpl8E-Zk-QRvbQQQ_76SlolAyc0vKKbo",
    authDomain: "crwn-db-f7039.firebaseapp.com",
    projectId: "crwn-db-f7039",
    storageBucket: "crwn-db-f7039.appspot.com",
    messagingSenderId: "456294540555",
    appId: "1:456294540555:web:3cec9f84e42f822b276e0e",
    measurementId: "G-BQ8P1TSQHQ"
  };

  export const createUserProfileDocument = async (userAuth, otherData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`user/${userAuth.uid}`)

      const userSnapShot = await userRef.get()

      if(!userSnapShot.exists) {
        const {displayName, email} = userAuth;
        const dateCreated = new Date();

        try {
          await userRef.set({
            displayName, email, dateCreated, ...otherData
          })
        } catch (error) {
          console.log('error creating the user', error.message)
        }

      }
      return userRef
  }


  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : "select_account"})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;