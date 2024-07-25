// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8yJkLeTpy156kQYLmXAdfDhBCuYLG5m4",
  authDomain: "myportfolio-2a337.firebaseapp.com",
  projectId: "myportfolio-2a337",
  storageBucket: "myportfolio-2a337.appspot.com",
  messagingSenderId: "943183998611",
  appId: "1:943183998611:web:94b321280406b17f52a766",
  measurementId: "G-FCSTBYYLER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };