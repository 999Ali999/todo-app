import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNblHuHWNExB6Xp9YVN95SY8Gr9bhZcQM",
  authDomain: "todo-app-20a7a.firebaseapp.com",
  databaseURL:
    "https://todo-app-20a7a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-app-20a7a",
  storageBucket: "todo-app-20a7a.appspot.com",
  messagingSenderId: "1076139595459",
  appId: "1:1076139595459:web:eaf8b88a5465e8e2dbf476",
  measurementId: "G-TFS8CK2NSJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
