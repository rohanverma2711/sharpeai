// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB57BDsSepl-QByC-KZeMspdVQpZw3t13c",
  authDomain: "sharpeai.firebaseapp.com",
  projectId: "sharpeai",
  storageBucket: "sharpeai.appspot.com",
  messagingSenderId: "247432581396",
  appId: "1:247432581396:web:90009edfa983f63501b201",
  measurementId: "G-9CVJ9Z4JLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Get Firestore instance

export {db} ;