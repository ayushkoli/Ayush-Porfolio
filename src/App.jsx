import { useState, useEffect } from 'react'

import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Experience from './components/experience'
import Skills from './components/skills'
import Projects from './components/Projects'
import CodingProfiles from './components/Codingprofile'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className={isLoading ? 'content-hidden' : 'content-visible'}>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
