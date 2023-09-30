import data from './projectdata'

export default function Projects() {

    const projects = data.map((item, index) => {
        return (
            <div key={index} className="project-item-container">
                <h4 className="project-name">{item.name}</h4>
                <img src={item.img} alt={item.alt} className="project-img img1" id={item.id}></img>
                <div className="project-link-container">
                    <a href={item.source} className="project-link" target="_blank">Live site</a>
                    <p className="divider">|</p>
                    <a href={item.github} className="project-link" target="_blank">GitHub</a>
                </div>
                <p className="tools">Tools: {item.tools}</p>
                <p className="project-description">{item.description}</p>
            </div>
        )
    })

    return (
        <div className="projects-container" id="projects">
            <h2 className="projects-title">My projects</h2>
            <div className="rendered-projects">
                {projects}
            </div>
        </div>
    )
}