// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD82J8bQB-HF_GIkIUVHXg3A0XH6loYgrM",
  authDomain: "my-one-movie.firebaseapp.com",
  projectId: "my-one-movie",
  storageBucket: "my-one-movie.appspot.com",
  messagingSenderId: "809836118733",
  appId: "1:809836118733:web:e1a2608e9f5ba78cfadf84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;