import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsrElUcpwz9_18X48RMRWRI_lc3AjmN1A",
  authDomain: "fir-app-6d535.firebaseapp.com",
  projectId: "fir-app-6d535",
  storageBucket: "fir-app-6d535.firebasestorage.app",
  messagingSenderId: "582937962166",
  appId: "1:582937962166:web:a3e77d41793fa69e6be817",
  measurementId: "G-1LG3EP1MBG"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
