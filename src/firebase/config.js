import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET ,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

//anytime we want to interact with firebase storage and database we need to invoke these
const photoBoothStorage = firebase.storage();
const photoBoothFirestore = firebase.firestore();

// timestamp for when images are uploaded
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// exports
export { photoBoothStorage , photoBoothFirestore, timestamp };
