// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwA8shKJ-0FTeNHzdEEP5lZeNLg9D1scA",
    authDomain: "genius-car-service-c75e5.firebaseapp.com",
    projectId: "genius-car-service-c75e5",
    storageBucket: "genius-car-service-c75e5.appspot.com",
    messagingSenderId: "479055635620",
    appId: "1:479055635620:web:97ab7638454aaaa2a27231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;