// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-oZ7ygd-2a6_bv7n9X-XdvQ_RfFyGCnA",
  authDomain: "house-marketplace-b4caf.firebaseapp.com",
  projectId: "house-marketplace-b4caf",
  storageBucket: "house-marketplace-b4caf.appspot.com",
  messagingSenderId: "564764646239",
  appId: "1:564764646239:web:63b72e245f135dd0bab4ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();