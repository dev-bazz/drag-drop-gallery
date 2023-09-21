// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const apiKey = import.meta.env.VITE_FIREBASE_PUBLISHABLE_KEY;

const firebaseConfig = {
	apiKey: apiKey,
	authDomain: "hng3-6da3e.firebaseapp.com",
	projectId: "hng3-6da3e",
	storageBucket: "hng3-6da3e.appspot.com",
	messagingSenderId: "734434487277",
	appId: "1:734434487277:web:93967ad47601d8404bd5e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
