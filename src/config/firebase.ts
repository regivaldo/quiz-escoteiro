import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDeNr-Fk81TBkjEeCp_21FhybUyk7vAI4Q",
  authDomain: "escoteiros-16816.firebaseapp.com",
  projectId: "escoteiros-16816",
  storageBucket: "escoteiros-16816.appspot.com",
  messagingSenderId: "908134477707",
  appId: "1:908134477707:web:9178fa10652a70d43ec98e",
  measurementId: "G-401X9F8D1N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics}