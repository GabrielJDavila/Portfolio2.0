

export default function About() {

    function handleScroll() {
        const projSection = document.querySelector(".projects-title")
        projSection.scrollIntoView({behavior: "smooth"})
    }

    return (
        <main className="about-container">
            <div className="what-i-do-container" id="services">
                <h2 className="about-title">What I do</h2>
                <div className="job-description-container">
                    <div className="design-container">
                        <p className="what-i-do-mini-title">Design</p>
                        <p className="what-i-do-descrip">I strive to create beautiful and intuitive web apps, designing with both aesthetics and usability in mind. UX leads my design process.</p>
                    </div>
                    <div className="development-container">
                        <p className="what-i-do-mini-title">Development</p>
                        <p className="what-i-do-descrip">I specialize in React JS, and have a great understanding of the fundamentals of web development: HTML, CSS, and Javascript, along with Firebase and React Router.</p>
                    </div>
                    <div className="design-container">
                        {/* <p>Skills</p> */}
                        <div className="skills-container">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="skill-icon"></img>        
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="skill-icon"></img> 
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="skill-icon"></img>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="skill-icon"></img> 
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="skill-icon"></img> 
                        </div>
                    </div>
                </div>
                <button className="see-projects-btn" onClick={handleScroll}>My Projects</button>
            </div>
            <div className="who-i-am-container" id="about">
                <h2 className="about-title">Who I am</h2>
                <p className="who-i-am-mini-title">Front-End Developer and fitness junkie from the US</p>
                <p className="who-i-am-description">I'm a frontend web developer based out of Illnois, USA. I have caught the programming bug, and love creating web apps that solve real world problems and are fun to use!</p>
                <p className="who-i-am-description">I specialize in React JS, and have a great understanding of the fundamentals of web dev - HTML, CSS, and Javascript. I also have experience working with Firebase databases.</p>
                <p className="who-i-am-description">My background is in fitness; I have been in the industry as a trainer for 7+ years, and am looking to hopefully bridge the gap between the physical and technological. I believe there is huge potential in using tech to better our understanding of our own health & fitness.</p>
            </div>
        </main>
    )
}
