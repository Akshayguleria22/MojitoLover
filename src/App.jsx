import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText.js'
import { gsap } from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cocktails />
    </>
  )
}

export default App
