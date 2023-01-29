import "firebase/compat/auth";
import firebase from  'firebase/compat/app';
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// Using environment variables makes it easier to switch over from development to production values without having to constantly switch between the two.
// This is also a great way not have environment variables in your source code for security reasons.
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

// Initialize Firebase
export const auth = app.auth()
export const db = getFirestore(app);
export default app;
