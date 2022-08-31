// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJF4dxFMcAWPut8pG1LLXJjVhPeTUfuXs",
  authDomain: "vefi-nft-collections-collation.firebaseapp.com",
  projectId: "vefi-nft-collections-collation",
  storageBucket: "vefi-nft-collections-collation.appspot.com",
  messagingSenderId: "478094501112",
  appId: "1:478094501112:web:76ad12b466ac99bb02070d",
  measurementId: "G-S6YN35K3FK"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const db = getFirestore(app);
export { app, analytics, db };
