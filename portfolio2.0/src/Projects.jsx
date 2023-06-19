
export default function Projects() {
    return (
        <div className="projects-container">
            <h2 className="projects-title">My projects</h2>
            <p>A selection of my range of work</p>
            <div className="mini-proj-container">
                <a href="https://beamish-ganache-a020c1.netlify.app/" className="portfolio-item">
                    <img src="./src/assets/tenzies-screenshot.png" alt="screenshot of tenzies app" className="portfolio-img img1"></img>
                    <p className="project-name">Tenzies game</p>
                    <p className="project-description">built with: React, CSS, HTML</p>
                </a>
                <a href="https://startling-begonia-80cfd3.netlify.app/" className="portfolio-item">
                    <img src="./src/assets/quizzical-screenshot.png" alt="screenshot of quizzical app" className="portfolio-img img2"></img>
                    <p className="project-name">Quizzical</p>
                    <p className="project-description">built with: React, CSS, HTML</p>
                </a>
                <a href="https://magical-toffee-a92ae3.netlify.app/" className="portfolio-item">
                    <img src="./src/assets/watchlist-screenshot.png" alt="screenshot of watchlist app" className="portfolio-img img3"></img>
                    <p className="project-name">Movie Watchlist</p>
                    <p className="project-description">built with: Vanilla Javascript, CSS, HTML</p>
                </a>
                <a href="https://venerable-maamoul-37b869.netlify.app/" className="portfolio-item">
                    <img src="./src/assets/endorsements-screenshot.png" alt="screenshot of endorsements app" className="portfolio-img img4"></img>
                    <p className="project-name">Employee Endorsements Page</p>
                    <p className="project-description">built with: Vanilla Javascript, Firebase, CSS, HTML</p>
                </a>
            </div>
        </div>
    )
}