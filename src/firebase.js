// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getFunctions } from "firebase/functions";

// Firebase configuration (Replace with your own config)
const firebaseConfig = {
    apiKey: "AIzaSyAZIqGj48CFgtw_TBWZwzHK3xlujTc5vfs",
    authDomain: "bytevance.firebaseapp.com",
    projectId: "bytevance",
    storageBucket: "bytevance.firebasestorage.app",
    messagingSenderId: "51409424171",
    appId: "1:51409424171:web:28bf9c0261c160dcfa7f6e",
    measurementId: "G-FYGX9Y8FR2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const functions = getFunctions(app);
const analytics = getAnalytics(app);
export { db, collection, addDoc ,functions, analytics};
