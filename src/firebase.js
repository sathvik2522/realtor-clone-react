// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALtDxW9DqYD-zE5JjK2qB_ynlBBka953s",
  authDomain: "realtor-clone-react-139b8.firebaseapp.com",
  projectId: "realtor-clone-react-139b8",
  storageBucket: "realtor-clone-react-139b8.appspot.com",
  messagingSenderId: "925124727648",
  appId: "1:925124727648:web:90b5c02a19ffa94a020405"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()