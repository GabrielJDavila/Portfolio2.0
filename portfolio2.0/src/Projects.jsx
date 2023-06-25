import data from './projectdata'

export default function Projects() {

    const projects = data.map((item, index) => {
        return (
            <a key={index} href={item.source} className="portfolio-item">
                <img src={item.img} alt={item.alt} className="portfolio-img img1" id={item.id}></img>
                {/* <p className={"project-name"}>{item.name}</p>
                <p>{item.tools}</p>
                <p className="project-description">{item.description}</p> */}
            </a>
        )
    })

    return (
        <div className="projects-container" id="projects">
            <h2 className="projects-title">My projects</h2>
            <p>A selection of my range of work</p>
            <div className="mini-proj-container">
                {projects}
                {/* <a href={props.source} className="portfolio-item">
                    <img src={props.img} alt={props.alt} className="portfolio-img img1"></img>
                    <p className={"project-name"}>{props.name}</p>
                    <p>{props.tools}</p>
                    <p className="project-description">{props.description}</p>
                </a> */}
                {/* <a href="https://startling-begonia-80cfd3.netlify.app/" className="portfolio-item">
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
                </a> */}
            </div>
        </div>
    )
}