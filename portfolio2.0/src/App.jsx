import { useState, useEffect, useRef } from 'react'
import Nav from "./Nav"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import TechStack from "./TechStack"
import Footer from "./Footer"

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {

    window.addEventListener("resize", updateWindowWidth)

    return () => {
      window.removeEventListener("resize", updateWindowWidth)
    }

  }, [])

  return (
    <div className="app-container" >
      <Nav
        windowWidth={windowWidth}
        sectionsRef={{ aboutRef, skillsRef, projectsRef, contactRef }}
      />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
