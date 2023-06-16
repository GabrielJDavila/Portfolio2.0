

export default function Nav(props) {

    const styles = {
        width: props.showMenu ? "100%" : "0",
        height: props.showMenu ? "80vh" : "0",
        overflowX: props.showMenu ? "" : "hidden"
    }

    const position = {
        // top: props.showMenu ? "10px" : "0",
        // right: props.showMenu ? "15px" : "0",
        display: !props.showMenu && "none",
    }
    // const menuIcon =
    //     props.showMenu ?
    //     <i className="fa-solid fa-bars" onClick={props.toggleMenu}></i> :
    //     <nav className="nav-container2" style={styles}>
    //             <i className="fa-solid fa-xmark" onClick={props.toggleMenu}></i>
    //             <li className="nav-item">Home</li>
    //             <li className="nav-item">About</li>
    //             <li className="nav-item">My Work</li>
    //             <li className="nav-item">Contact</li>
    //     </nav>

    return (
        <div className="nav-container1">
            <p className="nav-title">Gabe Davila</p>
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