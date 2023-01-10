import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { DbService } from "./services/db/db-service";
import { StorageService } from "./services/storage/storage-service";

const app = initializeApp({
  apiKey: "AIzaSyCD48PCyEk8LwmpoiYF-8h80Scqbo0QwzE",
  authDomain: "todos-4e9dc.firebaseapp.com",
  projectId: "todos-4e9dc",
  storageBucket: "todos-4e9dc.appspot.com",
  messagingSenderId: "94786702204",
  appId: "1:94786702204:web:2a89b4d43c1e79169732f9",
});

const db = getFirestore(app);
const storage = getStorage(app);
const root = ReactDOM.createRoot(document.getElementById("root"));

export const initDB = new DbService(db);
export const initStorage = new StorageService(storage);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
