import { useState } from 'react'
import Nav from "./Nav"
import Hero from "./Hero"

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
    </div>
  )
}

export default App
