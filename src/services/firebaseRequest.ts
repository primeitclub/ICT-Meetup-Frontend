import { initializeApp } from 'firebase/app';

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA1-4nSBtHEPuWD8CsVYFraiUPlCJR5GTU",
    authDomain: "ict-v7-73761.firebaseapp.com",
    projectId: "ict-v7-73761",
    storageBucket: "ict-v7-73761.appspot.com",
    messagingSenderId: "295096722985",
    appId: "1:295096722985:web:5052230d841805fa6b9e38",
    measurementId: "G-6QJXDVWBVY"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
