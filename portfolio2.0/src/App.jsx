import { useState } from 'react'
import Nav from "./Nav"
import Hero from "./Hero"
import About from "./About"

function App() {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(prev => !prev)
  }
  return (
    <div>
      <Nav
        showMenu={showMenu}
        toggleMenu={() => toggleMenu()}
      />
      <Hero />
      <About />
    </div>
  )
}

export default App
