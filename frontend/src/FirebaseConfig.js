// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyBHN9wM2O-ncfXh60LV-HSHoe-e3fjRmDA",
//   authDomain: "financial-app-82567.firebaseapp.com",
//   projectId: "financial-app-82567",
//   storageBucket: "financial-app-82567.appspot.com",
//   messagingSenderId: "311844851893",
//   appId: "1:311844851893:web:39d1c9908b15aed3ad6efc",
//   measurementId: "G-GKT9T1Q0D9",
// };

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBukuwbpzVFSPf8EP6bQtbl_Url81OoeUQ",
  authDomain: "fin2-b79c1.firebaseapp.com",
  projectId: "fin2-b79c1",
  storageBucket: "fin2-b79c1.appspot.com",
  messagingSenderId: "160836092073",
  appId: "1:160836092073:web:1a30da71f3535d41e9a9b8",
  measurementId: "G-FHNFRVKR37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
