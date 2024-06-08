import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAz45XFuRTa6-J5L7T_WVydMxRWhpfeVfs",
  authDomain: "e-2-nextjs.firebaseapp.com",
  projectId: "e-2-nextjs",
  storageBucket: "e-2-nextjs.appspot.com",
  messagingSenderId: "712721831584",
  appId: "1:712721831584:web:910c29f993c6d80bc01bc5"
};

const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();

export default db;