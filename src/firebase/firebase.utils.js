import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBTmfhDnpzr_WyLk5msDv5DnvpSJzRq9Qo",
    authDomain: "crwn-db-f3233.firebaseapp.com",
    projectId: "crwn-db-f3233",
    storageBucket: "crwn-db-f3233.appspot.com",
    messagingSenderId: "787486603559",
    appId: "1:787486603559:web:e701ff716a1e7fe8e31102",
    measurementId: "G-3XESKH29BL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;