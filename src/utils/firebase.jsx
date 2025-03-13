// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOj37sfLek2WYcbbFvvV0_Sb_5DigizSA",
  authDomain: "netflixgpt-be023.firebaseapp.com",
  projectId: "netflixgpt-be023",
  storageBucket: "netflixgpt-be023.firebasestorage.app",
  messagingSenderId: "553837746016",
  appId: "1:553837746016:web:f3e58632bfa2434e4b3005",
  measurementId: "G-61FKSXY36C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
