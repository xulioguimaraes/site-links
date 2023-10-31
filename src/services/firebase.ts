// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJzVlNzn5EyDOQu7mSk5NXM1H3q31ssZ8",
  authDomain: "to-do-4de12.firebaseapp.com",
  databaseURL: "https://to-do-4de12-default-rtdb.firebaseio.com",
  projectId: "to-do-4de12",
  storageBucket: "to-do-4de12.appspot.com",
  messagingSenderId: "498088754018",
  appId: "1:498088754018:web:01d06ce1e0ef76e17b8a3b",
  measurementId: "G-49E1PB136Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
