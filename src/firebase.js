import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
     apiKey: "Axxxxxxxxxxxxxxxxxxx",
     authDomain: "xxxxxx.firebaseapp.com",
     databaseURL: "https://xxxxxxxx.firebaseio.com",
     projectId: "xxxxxxxxx",
     storageBucket: "xxxxxxx.appspot.com",
     messagingSenderId: "xxxxxxxxxxx",
     appId: "1:xxxxxxxxx:web:xxxxxxx",
     measurementId: "xxxxxxxxx"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
