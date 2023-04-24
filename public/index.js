// SDK's
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-messaging.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnjq0dPsCFNBDWyAcdAXY27A-wzVYsom4",
  authDomain: "fcm-web-poc.firebaseapp.com",
  projectId: "fcm-web-poc",
  storageBucket: "fcm-web-poc.appspot.com",
  messagingSenderId: "1064688451347",
  appId: "1:1064688451347:web:82dffb14aa2edb538a24e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
