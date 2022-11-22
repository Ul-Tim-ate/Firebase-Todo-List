import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: "AIzaSyBYGOUoHh4rMUnVwdypcWtjesE8l3DQJFc",
  authDomain: "fir-todolist-b4d54.firebaseapp.com",
  projectId: "fir-todolist-b4d54",
  storageBucket: "fir-todolist-b4d54.appspot.com",
  messagingSenderId: "499869636150",
  appId: "1:499869636150:web:159b228faeb670c5b0aa97",
});


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
