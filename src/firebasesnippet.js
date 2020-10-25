import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDHWEkSJKqgJrnfwSNLe4vrd47mjsFw8zk",
  authDomain: "tryit-750af.firebaseapp.com",
  databaseURL: "https://tryit-750af.firebaseio.com",
  projectId: "tryit-750af",
  storageBucket: "tryit-750af.appspot.com",
  messagingSenderId: "11794398699",
  appId: "1:11794398699:web:6f3058bd3f7a59f1822dae",
  measurementId: "G-YD00W396ZC",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
