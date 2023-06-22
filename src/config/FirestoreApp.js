// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaFF7OzBVNmjk8hvn7Im3AGDPdzMWuCks",
  authDomain: "login-app-a3031.firebaseapp.com",
  databaseURL: "https://login-app-a3031.firebaseio.com",
  projectId: "login-app-a3031",
  storageBucket: "login-app-a3031.appspot.com",
  messagingSenderId: "648292646507",
  appId: "1:648292646507:web:f865d3faa451ad3e233b2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);