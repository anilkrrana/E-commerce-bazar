// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9BSAxzFFhe4CrIxNbus2LtiENw3o9OyE",
  authDomain: "bazarapp-3ccc1.firebaseapp.com",
  projectId: "bazarapp-3ccc1",
  storageBucket: "bazarapp-3ccc1.appspot.com",
  messagingSenderId: "848325575823",
  appId: "1:848325575823:web:a4a015e88682d9dbe81cfa",
  measurementId: "G-PSDC63RMW4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);