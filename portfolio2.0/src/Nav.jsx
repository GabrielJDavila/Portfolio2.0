import { useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll"

export default function Nav(props) {
    const [showMenu, setShowMenu] = useState(false)

    function toggleMenu() {
        setShowMenu(prev => !prev)
    }

    const styles = {
        width: showMenu ? "100%" : "0",
        height: showMenu ? "420px" : "0",
        transition: showMenu ? ".3sec all ease" : ""
    }

    const position = {
        display: !showMenu && "none",
    }

    return (
        <div className="nav-container1">
            <div className="social-icon-container">
                <a href="https://www.linkedin.com/in/gabrieljdavila/" target="_blank" alt="linkedin social icon"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/GabrielJDavila" target="_blank" alt="github social icon"><i className="fa-brands fa-github"></i></a>
                <a href="./gabeDavilaWebDevResume2023.pdf" target="_blank" alt="resume pdf icon"><i class="fa-solid fa-file-arrow-down"></i></a>
            </div>
            
            {!showMenu ? <i className="fa-solid fa-bars" onClick={toggleMenu}></i> :
            <i className="fa-solid fa-xmark" onClick={toggleMenu} style={position}></i>
            }
            {props.windowWidth <= 800 ?
            <nav className="nav-container2" style={styles}>
                <a href="/">
                    <li className="nav-item">Home</li>
                </a>
                <Link to="about" onClick={toggleMenu} smooth={true} offset={-50} duration={500}>
                    <li className="nav-item">About</li>
                </Link>
                <Link to="skills" onClick={toggleMenu} smooth={true} offset={-50} duration={500}>
                    <li className="nav-item">Skills</li>
                </Link>
                <Link to="projects" onClick={toggleMenu} smooth={true} offset={-50} duration={500}>
                    <li className="nav-item">My Work</li>
                </Link>
                <Link to="contact" onClick={toggleMenu} smooth={true} offset={-50} duration={500}>
                    <li className="nav-item">Contact</li>
                </Link>
            </nav>
            :
            <nav className="nav-container2-large">
                <a href="/">
                    <li className="nav-item">Home</li>
                </a>
                <Link to="about" onClick={toggleMenu} smooth={true} offset={-50} duration={500}>
                    <li className="nav-item">About</li>
                </Link>
                <Link to="skills" onClick={toggleMenu} smooth={true} offset={-50} duration={500}>
                    <li className="nav-item">Skills</li>
                </Link>
                <Link to="projects" onClick={toggleMenu} smooth={true} offset={-50} duration={500}>
                    <li className="nav-item">My Work</li>
                </Link>
                <Link to="contact" onClick={toggleMenu} smooth={true} offset={-50} duration={500}>
                    <li className="nav-item">Contact</li>
                </Link>
            </nav>
            }
        </div>
    )
}