
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeWW4bhnv5h1PPlEd3TLnFyoSSzPeRPAo",
  authDomain: "vapeshop-8b737.firebaseapp.com",
  databaseURL: "https://vapeshop-8b737-default-rtdb.firebaseio.com",
  projectId: "vapeshop-8b737",
  storageBucket: "vapeshop-8b737.appspot.com",
  messagingSenderId: "986666795511",
  appId: "1:986666795511:web:f6b360a9156b8662a12ef2",
  measurementId: "G-HM3TRGQYYE"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
