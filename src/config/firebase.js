// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ9XrbFE4DlRammWCNLP82otL-owTfcQY",
  authDomain: "ts-fb-comicshop.firebaseapp.com",
  projectId: "ts-fb-comicshop",
  storageBucket: "ts-fb-comicshop.appspot.com",
  messagingSenderId: "162802484457",
  appId: "1:162802484457:web:74c52a615ac873f1801c78",
  measurementId: "G-WKMJ73TN17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();