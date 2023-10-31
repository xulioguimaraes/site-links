// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VITE_API_API_KEY,
  authDomain: process.env.VITE_API_AUTH_DOMAIN,
  databaseURL: process.env.VITE_API_DATABASE_URL,
  projectId: process.env.VITE_API_PROJECT_ID,
  storageBucket: process.env.VITE_API_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_API_MESSAGING_SENDER_ID,
  appId: process.env.VITE_API_APP_ID,
  measurementId: process.env.VITE_API_MEASURENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
