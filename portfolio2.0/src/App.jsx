import { useState, useEffect, useRef } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Layout from './components/Layout'
import Nav from "./Nav"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import TechStack from "./TechStack"
import Footer from "./Footer"
import MarkdownPost from './MarkdownPost'

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
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Layout />}>
    //       <Route index element={<Hero />} />
    //       <Route path="blog" element={<MarkdownPost />} />
    //     </Route>
    //   </Routes>
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
    // </BrowserRouter>
  )
}

export default App
