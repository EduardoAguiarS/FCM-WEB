importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCnjq0dPsCFNBDWyAcdAXY27A-wzVYsom4",
  authDomain: "fcm-web-poc.firebaseapp.com",
  projectId: "fcm-web-poc",
  storageBucket: "fcm-web-poc.appspot.com",
  messagingSenderId: "1064688451347",
  appId: "1:1064688451347:web:82dffb14aa2edb538a24e6"
});

const messaging = firebase.messaging();

// Register vapid key
const vapidPublicKey = 'BDBTe05KkWqb5YST2u2Ghpt2s-ZOa-I6xEnOWDXSh0A1exqgxbd5--XNSCwNCnRBs3SsnNcxwc-HTk4ys-VH01I'

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
    tag: 'teste'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});