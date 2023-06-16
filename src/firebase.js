// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU4NnNTSpXpH83g0iLc_m4BUUaQD9RjE4",
  authDomain: "react-auth-96ff8.firebaseapp.com",
  projectId: "react-auth-96ff8",
  storageBucket: "react-auth-96ff8.appspot.com",
  messagingSenderId: "641598197712",
  appId: "1:641598197712:web:dcc7243a1dff51957c33d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

