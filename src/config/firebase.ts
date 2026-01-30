import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwEE07KQZX6wxnGVCWrh8CcKBlwB44YpA",
  authDomain: "quiz-escoteiro-cacee.firebaseapp.com",
  projectId: "quiz-escoteiro-cacee",
  storageBucket: "quiz-escoteiro-cacee.firebasestorage.app",
  messagingSenderId: "366160082201",
  appId: "1:366160082201:web:37c0ef23eb9677d43c0188",
  measurementId: "G-VWCFGNEQJH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, analytics, auth}
