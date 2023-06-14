

export default function Nav(props) {

    const menuIcon =
        props.showMenu ?
        <i className="fa-solid fa-bars" onClick={props.toggleMenu}></i> :
        <nav className="nav-container2">
                <i className="fa-solid fa-xmark" onClick={props.toggleMenu}></i>
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">My Work</li>
                <li className="nav-item">Contact</li>
        </nav>

    return (
        <div className="nav-container1">
            <img src="./src/assets/selfportrait.png.png" className="nav-logo"></img>
            <p className="nav-title">Gabe Davila</p>
            {menuIcon}
        </div>
    )
}