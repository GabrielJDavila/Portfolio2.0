import data from './projectdata'

export default function Projects() {

    const projects = data.map((item, index) => {
        return (
            <a key={index} href={item.source} className="portfolio-item" target="_blank">
                <img src={item.img} alt={item.alt} className="portfolio-img img1" id={item.id}></img>
            </a>
        )
    })

    return (
        <div className="projects-container" id="projects">
            <h2 className="projects-title">My projects</h2>
            <div className="mini-proj-container">
                {projects}
            </div>
        </div>
    )
}