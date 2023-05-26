import { useState } from 'react'
import './App.css'

import { initializeApp } from "firebase/app";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA8fUROB4_7cPi6ZsgtAkI7StLxOQ8LUag",
  authDomain: "fireship-chat-app-8f220.firebaseapp.com",
  projectId: "fireship-chat-app-8f220",
  storageBucket: "fireship-chat-app-8f220.appspot.com",
  messagingSenderId: "496135308574",
  appId: "1:496135308574:web:4f9ce398878c6c0d6a750f",
  measurementId: "G-X24KPEJ4PK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const [user] = useAuthState(auth);

function App() {

  return (
    <div>
      <h1>Counter</h1>
    </div>
  )
}

export default App
