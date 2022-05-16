// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA3f3tLBI-8UAX4ze7uPy5PSfnR9WW-R8I",
    authDomain: "collection-2f228.firebaseapp.com",
    databaseURL: "https://collection-2f228-default-rtdb.firebaseio.com",
    projectId: "collection-2f228",
    storageBucket: "collection-2f228.appspot.com",
    messagingSenderId: "807283749640",
    appId: "1:807283749640:web:5200d1030202c7eb4db2bd",
    measurementId: "G-5ZPX29SP2S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);