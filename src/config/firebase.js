import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "gradate-b0e38.firebaseapp.com",
  databaseURL:
    "https://gradate-b0e38-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gradate-b0e38",
  storageBucket: "gradate-b0e38.appspot.com",
  messagingSenderId: "649739393318",
  appId: "1:649739393318:web:2e90cfaf7ddd4a249089e7",
  measurementId: "G-GPP9YKQFP2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
