import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyC6oMrw7JmW_r7wn6T7nJO-WU1auefhLcg",
  authDomain: "teamwork-app-6c8a4.firebaseapp.com",
  projectId: "teamwork-app-6c8a4",
  storageBucket: "teamwork-app-6c8a4.appspot.com",
  messagingSenderId: "588681674526",
  appId: "1:588681674526:web:19139da471110d9cb8530f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot (document.getElementById("root"));
root.render (
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

