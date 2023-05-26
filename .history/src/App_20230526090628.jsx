import { useState } from 'react'
import './App.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter</h1>
    </div>
  )
}

export default App
