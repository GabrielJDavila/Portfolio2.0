

export default function Nav(props) {

    const styles = {
        width: props.showMenu ? "100%" : "0",
        height: props.showMenu ? "auto" : "0",
        overflowX: props.showMenu ? "" : "hidden",
        transition: !props.showMenu ? ".5sec ease-in-out" : ""
    }

    const position = {
        display: !props.showMenu && "none",
    }

    return (
        <div className="nav-container1">
            <p className="nav-title">Gabe Davila</p>
            
            {!props.showMenu ? <i className="fa-solid fa-bars" onClick={props.toggleMenu}></i> :
            <i className="fa-solid fa-xmark" onClick={props.toggleMenu} style={position}></i>
            }
            <nav className="nav-container2" style={styles}>
                <a href="/"><li className="nav-item">Home</li></a>
                <a href="#projects" onClick={props.toggleMenu}><li className="nav-item">My Work</li></a>
                <a href="#services" onClick={props.toggleMenu}><li className="nav-item">Services</li></a>
                <a href="#about" onClick={props.toggleMenu}><li className="nav-item">About</li></a>
                <a href="#contact" onClick={props.toggleMenu}><li className="nav-item">Contact</li></a>
            </nav>
        </div>
    )
}