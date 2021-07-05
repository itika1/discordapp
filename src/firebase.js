import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAanwLwOfyev664-UyFp8QieGu9bbFU_AI",
    authDomain: "discord-app-99435.firebaseapp.com",
    projectId: "discord-app-99435",
    storageBucket: "discord-app-99435.appspot.com",
    messagingSenderId: "759305442408",
    appId: "1:759305442408:web:46dd80b0fc40f5d55dd7dd",
    measurementId: "G-1MRJ1RRPHM"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;