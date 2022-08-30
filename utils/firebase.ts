// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZke1D2XeKQOVlrw8ssQ3xSyWZ0nIfG1Y",
  authDomain: "chat-app-85926.firebaseapp.com",
  projectId: "chat-app-85926",
  storageBucket: "chat-app-85926.appspot.com",
  messagingSenderId: "1062538230615",
  appId: "1:1062538230615:web:768eba2a60c02743e2dc12",
  measurementId: "G-MHES3420H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
