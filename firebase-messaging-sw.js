importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyArfkWZCq94IAEqR8BmeeSNaL5xe7fkn2g",
    authDomain: "myapplication-c1475.firebaseapp.com",
    databaseURL: "https://myapplication-c1475.firebaseio.com",
    projectId: "myapplication-c1475",
    storageBucket: "myapplication-c1475.appspot.com",
    messagingSenderId: "3645910537",
    appId: "1:3645910537:web:2b2e1227b1cfe3165c12d8",
    measurementId: "G-D9PDQWX2H8"
  });
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});
