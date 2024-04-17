// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBewIJKzdqS1o32oDaqflbBYzQBM6qhrAs",
  authDomain: "wallet-wizard-pj.firebaseapp.com",
  projectId: "wallet-wizard-pj",
  storageBucket: "wallet-wizard-pj.appspot.com",
  messagingSenderId: "1052490734430",
  appId: "1:1052490734430:web:75fa7a7e6d3f07bf5a8dcf",
  measurementId: "G-WMVN1K4R2R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
