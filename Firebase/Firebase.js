// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABKX9ppBozwOawb5xLRjT0nkTnzv4og7U",
  authDomain: "smart-india-hackathon-542ea.firebaseapp.com",
  projectId: "smart-india-hackathon-542ea",
  storageBucket: "smart-india-hackathon-542ea.appspot.com",
  messagingSenderId: "1041313564863",
  appId: "1:1041313564863:web:37d0f9e1b4f536f95cde0a",
  measurementId: "G-EXCLTBZBRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);