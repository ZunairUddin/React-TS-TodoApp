// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgnkxCof0rdochaWGMRvA5ayUsz2LgOS0",
  authDomain: "todo-app-535f7.firebaseapp.com",
  projectId: "todo-app-535f7",
  storageBucket: "todo-app-535f7.appspot.com",
  messagingSenderId: "154711778539",
  appId: "1:154711778539:web:4ca577c52b110267054aae",
  measurementId: "G-PE2PPXSM0G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
