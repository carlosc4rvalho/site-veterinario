import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8TB-1hsO9HUwRYIUPsVrTI6yKfck39Pw",
  authDomain: "veterinariaif-3e5c8.firebaseapp.com",
  projectId: "veterinariaif-3e5c8",
  storageBucket: "veterinariaif-3e5c8.appspot.com",
  messagingSenderId: "117948022282",
  appId: "1:117948022282:web:c149a283a159bdbab3a9f3",
  measurementId: "G-D2MNM8RLXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;