import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Playful from './components/Playful'
import Footer from './components/Footer'
import Ready from './components/Ready'

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About />
      <Playful />
      <Ready />
      <Footer/>
    </div>
  )
}

export default App