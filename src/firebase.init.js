// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPwP2h_JDxrC4u6It_TU3IdHQno2tuTiU",
  authDomain: "genius-car-servises-f552c.firebaseapp.com",
  projectId: "genius-car-servises-f552c",
  storageBucket: "genius-car-servises-f552c.appspot.com",
  messagingSenderId: "575226318124",
  appId: "1:575226318124:web:e5ffd40422d25bb75f7089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;