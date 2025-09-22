// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi5mtc11TpclvhbCJdNqlUKCEGH4Ov1ZI",
  authDomain: "plant-tracker-web-app-c73a3.firebaseapp.com",
  projectId: "plant-tracker-web-app-c73a3",
  storageBucket: "plant-tracker-web-app-c73a3.firebasestorage.app",
  messagingSenderId: "342199454970",
  appId: "1:342199454970:web:667973b968d3de48798d43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;