

export default function Nav(props) {

    const styles = {
        width: props.showMenu ? "100%" : "0",
        height: props.showMenu ? "100vh" : "0",
        overflowX: props.showMenu ? "" : "hidden"
    }

    const position = {
        // top: props.showMenu ? "10px" : "0",
        // right: props.showMenu ? "15px" : "0",
        display: !props.showMenu && "none",
    }

    return (
        <div className="nav-container1">
            <p className="nav-title">Gabe Davila</p>
            <div className="social-icons-container">
                {/* <a href="https://www.linkedin.com/in/gabrieljdavila/" className="social-link"><img src="./src/assets/Orion_linkedin.svg" className="social-icon"></img></a>
                <a href="https://github.com/GabrielJDavila" className="social-link"><img src="./src/assets/Orion_github.svg" className="social-icon"></img></a> */}
            </div>
            <a href="https://www.linkedin.com/in/gabrieljdavila/" target="_blank" alt="linkedin social icon"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/GabrielJDavila" target="_blank" alt="github social icon"><i class="fa-brands fa-github"></i></a>
            {!props.showMenu ? <i className="fa-solid fa-bars" onClick={props.toggleMenu}></i> :
            <i className="fa-solid fa-xmark" onClick={props.toggleMenu} style={position}></i>
            }
            <nav className="nav-container2" style={styles}>
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">My Work</li>
                <li className="nav-item">Contact</li>
            </nav>
        </div>
    )
}