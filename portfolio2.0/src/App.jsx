import { useState } from 'react'
import Nav from "./Nav"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import TechStack from "./TechStack"
import Footer from "./Footer"

function App() {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(prev => !prev)
  }

  return (
    <div className="app-container" >
      <Nav
        showMenu={showMenu}
        toggleMenu={() => toggleMenu()}
      />
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Footer />
    </div>
  )
}

export default App
