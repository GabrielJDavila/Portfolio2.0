import { useState } from 'react'
import Nav from "./Nav"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import Footer from "./Footer"

function App() {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(prev => !prev)
  }

  return (
    <div className="app-container">
      <Nav
        showMenu={showMenu}
        toggleMenu={() => toggleMenu()}
      />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
