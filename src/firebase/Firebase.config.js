// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,

  // apiKey: "AIzaSyD5eab7P2Ag88dQmfeVm5I1hDK7JnuIJFo",
  // authDomain: "educational-assistance-9d346.firebaseapp.com",
  // projectId: "educational-assistance-9d346",
  // storageBucket: "educational-assistance-9d346.appspot.com",
  // messagingSenderId: "1071287174345",
  // appId: "1:1071287174345:web:61d2f30090ff541729f918"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;