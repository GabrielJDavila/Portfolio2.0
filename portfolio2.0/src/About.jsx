

export default function About() {
    return (
        <main className="about-container">
            <div className="what-i-do-container">
                <h2>What I do</h2>
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
                <button className="see-projects-btn">My Projects</button>
            </div>
            <div className="who-i-am-container">
                <h2>Who I am</h2>
                <p>Front-End Developer and fitness junkie from Illnois, US</p>
                <p>Text goes here</p>
            </div>
        </main>
    )
}
