// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAniGLcu-txqwO9Dx9YBwWoMwe5aOto2aY",
  authDomain: "awaredesign-287c8.firebaseapp.com",
  projectId: "awaredesign-287c8",
  storageBucket: "awaredesign-287c8.appspot.com",
  messagingSenderId: "186879887751",
  appId: "1:186879887751:web:22d7bdb9e1d278e7abab22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);