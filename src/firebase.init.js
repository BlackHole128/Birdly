// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3g-h7AHlT6QwwHjV4TE3oT6SmO5X-wso",
    authDomain: "birdly-2d129.firebaseapp.com",
    projectId: "birdly-2d129",
    storageBucket: "birdly-2d129.appspot.com",
    messagingSenderId: "987546313096",
    appId: "1:987546313096:web:7b41649e854dbda702da3d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
