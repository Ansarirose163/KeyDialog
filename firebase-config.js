// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHTsdTtVe-pKnYukLGDuvUGBJ3fIAt7us",
    authDomain: "badboyadmin-eb3e9.firebaseapp.com",
    projectId: "badboyadmin-eb3e9",
    storageBucket: "badboyadmin-eb3e9.appspot.com",
    messagingSenderId: "310183389856",
    appId: "1:310183389856:web:xxxxxxxxxxxxxx" // Yeh tumhare web app ki ID aayegi
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();