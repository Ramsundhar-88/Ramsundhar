import { useState } from 'react'
import React from 'react'
import './App.css'
import './index.css'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className="font-sans text-gray-800 ">

      <Home/>


    </div>

     </>
  )
}

export default App
