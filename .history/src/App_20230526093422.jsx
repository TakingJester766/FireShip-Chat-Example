import { useState, useEffect } from 'react'
import './App.css'

import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8fUROB4_7cPi6ZsgtAkI7StLxOQ8LUag",
  authDomain: "fireship-chat-app-8f220.firebaseapp.com",
  projectId: "fireship-chat-app-8f220",
  storageBucket: "fireship-chat-app-8f220.appspot.com",
  messagingSenderId: "496135308574",
  appId: "1:496135308574:web:4f9ce398878c6c0d6a750f",
  measurementId: "G-X24KPEJ4PK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <header>
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  )
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

export default App
