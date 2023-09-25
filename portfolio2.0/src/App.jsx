import { useState, useEffect } from 'react'
import Nav from "./Nav"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import TechStack from "./TechStack"
import Footer from "./Footer"

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {

    window.addEventListener("resize", updateWindowWidth)

    return () => {
      window.removeEventListener("resize", updateWindowWidth)
    }

  }, [])

  function toggleMenu() {
    setShowMenu(prev => !prev)
  }

  return (
    <div className="app-container" >
      <Nav
        showMenu={showMenu}
        toggleMenu={() => toggleMenu()}
        windowWidth={windowWidth}
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
