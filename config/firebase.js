// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIEtSdz-_V2OjnLkloLbJv9dQHFVy2_Hs",
  authDomain: "project-3bd23.firebaseapp.com",
  projectId: "project-3bd23",
  storageBucket: "project-3bd23.appspot.com",
  messagingSenderId: "81408160599",
  appId: "1:81408160599:web:da6776a0f8231f01ddc412",
  measurementId: "G-9285VY8LBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app);