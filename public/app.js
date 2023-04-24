// SDK's
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-messaging.js";

// Import html elements
const subscribeBtn = document.getElementById('subscribe');
const tokenDiv = document.getElementById('token');

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

// Get messaging instance
const messaging = getMessaging();

subscribeBtn.addEventListener('click', () => {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      getToken(messaging, {vapidKey: 'BDBTe05KkWqb5YST2u2Ghpt2s-ZOa-I6xEnOWDXSh0A1exqgxbd5--XNSCwNCnRBs3SsnNcxwc-HTk4ys-VH01I'})
        .then((currentToken) => {
          if (currentToken) {
            tokenDiv.innerHTML = currentToken;
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
    }
  });
});