import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyBxhSnsY3x9nNndE6KCOYnYyeMXsb5tM",
  authDomain: "martin-ordonez.firebaseapp.com",
  projectId: "martin-ordonez",
  storageBucket: "martin-ordonez.firebasestorage.app",
  messagingSenderId: "394830460782",
  appId: "1:394830460782:web:507046b7eb03b30f05737f",
  measurementId: "G-MKJ6VX88NF"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export { db, app };
