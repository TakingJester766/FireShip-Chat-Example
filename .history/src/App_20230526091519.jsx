import { useState } from 'react'
import './App.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



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


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter</h1>
    </div>
  )
}

export default App
