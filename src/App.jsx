import { useState } from 'react'
import React from 'react'
import './App.css'
import './index.css'
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/about'
import Projects from './pages/project'
import Skills from './pages/skills'
import Contact from './pages/contact'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className="font-sans text-gray-800">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>

    </div>

     </>
  )
}

export default App
