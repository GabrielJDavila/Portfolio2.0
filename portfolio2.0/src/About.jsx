

export default function About() {

    function handleScroll() {
        const projSection = document.querySelector(".projects-title")
        projSection.scrollIntoView({behavior: "smooth"})
    }

    return (
        <main className="about-container">
            <div className="what-i-do-container">
                <h2 className="about-title">What I do</h2>
                <div className="job-description-container">
                    <div className="design-container">
                        <p>Design</p>
                        <p>Text goes here</p>
                    </div>
                    <div className="development-container">
                        <p>Development</p>
                        <p>Text goes here</p>
                    </div>
                </div>
                <button className="see-projects-btn" onClick={handleScroll}>My Projects</button>
            </div>
            <div className="who-i-am-container">
                <h2 className="about-title">Who I am</h2>
                <p className="who-i-am-mini-title">Front-End Developer and fitness junkie from the US</p>
                <p className="who-i-am-description">Text goes here</p>
            </div>
        </main>
    )
}
