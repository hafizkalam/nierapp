// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClcNIwDJAXV2VRw0G45V1fz73zWeSGaPM",
  authDomain: "nierapp-31056.firebaseapp.com",
  databaseURL: "https://nierapp-31056-default-rtdb.firebaseio.com",
  projectId: "nierapp-31056",
  storageBucket: "nierapp-31056.appspot.com",
  messagingSenderId: "117502215256",
  appId: "1:117502215256:web:6bbfd154d3faeec465b62d"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};