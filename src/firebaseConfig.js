import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNblHuHWNExB6Xp9YVN95SY8Gr9bhZcQM",
  authDomain: "todo-app-20a7a.firebaseapp.com",
  databaseURL:
    "https://todo-app-20a7a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-app-20a7a",
  storageBucket: "todo-app-20a7a.appspot.com",
  messagingSenderId: "1076139595459",
  appId: "1:1076139595459:web:dfef33273153fdf2dbf476",
  measurementId: "G-4K5LBC69Y9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
