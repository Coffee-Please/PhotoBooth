import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET ,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase.app().options);
//anytime we want to interact with firebase storage and database we need to invoke these 
// const photoBoothStorage = firebase.storage();
// const photoBoothFirestore = firebase.firestore();

// export {photoBoothStorage , photoBoothFirestore };