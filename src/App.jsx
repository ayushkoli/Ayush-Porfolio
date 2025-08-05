import { useState } from 'react'

import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Experience from './components/experience'
import Skills from './components/skills'
import Projects from './components/Projects'
import CodingProfiles from './components/Codingprofile'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <CodingProfiles />
      <Contact />
      <Footer />
    </>
  )
}

export default App
