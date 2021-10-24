// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBggochAmNx2QenQwVbDGmpud0AOSH1VA",
  authDomain: "instagram-e71da.firebaseapp.com",
  projectId: "instagram-e71da",
  storageBucket: "instagram-e71da.appspot.com",
  messagingSenderId: "384078375253",
  appId: "1:384078375253:web:4f42c675462b0d35fc67dc",
  measurementId: "G-626DG7ZTXY",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
