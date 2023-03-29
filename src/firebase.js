// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALZ7x_aAF1Hiq7HKRVkVQbryTc2lCgmJc",
  authDomain: "image-uploader-tutorial-7672b.firebaseapp.com",
  projectId: "image-uploader-tutorial-7672b",
  storageBucket: "image-uploader-tutorial-7672b.appspot.com",
  messagingSenderId: "484820334967",
  appId: "1:484820334967:web:cb512c82689a2dbf130972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export default storage;