
export default function Hero() {
    return (
        <div className="hero-container">
            <h1 className="hero-title">Hi, I'm Gabriel</h1>
            <img src="./src/assets/selfportrait2.png" className="hero-logo"></img>
            <div className="hero-description">
                <p className="hero-description-title">Frontend Developer</p>
                <div className="skills-container">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="skill-icon"></img>        
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="skill-icon"></img> 
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="skill-icon"></img>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="skill-icon"></img> 
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="skill-icon"></img> 
                </div>
            </div>
        </div>
    )
}