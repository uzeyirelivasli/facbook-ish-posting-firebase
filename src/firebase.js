import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0laDkpr-s7BEylPmXu5edxQg-qsbsCqA",
  authDomain: "facebook-clone-991ed.firebaseapp.com",
  projectId: "facebook-clone-991ed",
  storageBucket: "facebook-clone-991ed.appspot.com",
  messagingSenderId: "661459149783",
  appId: "1:661459149783:web:ce9b71086c715a30cce192",
  measurementId: "G-DR0CS77BQQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
