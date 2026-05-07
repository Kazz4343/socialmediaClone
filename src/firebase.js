import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlBqK7wSCRsAtdaKPCLsvs9goL7zfvm2o",
  authDomain: "socialmedia-9ecda.firebaseapp.com",
  projectId: "socialmedia-9ecda",
  storageBucket: "socialmedia-9ecda.firebasestorage.app",
  messagingSenderId: "438109422401",
  appId: "1:438109422401:web:839b463acb26164c7ed7c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
