/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

import { initializeApp } from "firebase/app";

const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyB5WRrB9RmyTGD4yF64jOpvH3CJAHBcBL0",
  authDomain: "friendlychat-9180b.firebaseapp.com",
  projectId: "friendlychat-9180b",
  storageBucket: "friendlychat-9180b.appspot.com",
  messagingSenderId: "40378501141",
  appId: "1:40378501141:web:5635ed099940ac581ae61c"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}