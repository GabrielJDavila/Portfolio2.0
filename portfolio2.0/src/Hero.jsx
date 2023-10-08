export default function Hero() {
    
    function handleScroll() {
        const projSection = document.querySelector(".projects-title")
        projSection.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div className="hero-container">
            <h1 className="hero-title">Gabriel Davila</h1>
            <p className="hero-description-title">Frontend developer</p>
            <button className="see-projects-btn" onClick={handleScroll}>See my work</button>
            <i className="fa-solid fa-arrow-down"></i>
        </div>
    )
}