

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
                        <p>I strive to create beautiful and intuitive web apps, designing with both aestetics and usability in mind. In all of my projects, I lead my thought process with UI/UX, and have experience with Figma.</p>
                    </div>
                    <div className="development-container">
                        <p>Development</p>
                        <p>I'm an adaptable and versatile frontend dev, and I specialize in React JS, and have knowledge and experience with Firebase. I have a great understanding of the fundamentals of web development: HTML, CSS, and Javascript.</p>
                    </div>
                </div>
                <button className="see-projects-btn" onClick={handleScroll}>My Projects</button>
            </div>
            <div className="who-i-am-container">
                <h2 className="about-title">Who I am</h2>
                <p className="who-i-am-mini-title">Front-End Developer and fitness junkie from the US</p>
                <p className="who-i-am-description">I'm a frontend web developer based out of Illnois, USA. I have caught the programming bug, and love creating web apps that solve real world problems and are fun to use!</p>
                <p className="who-i-am-description">I specialize in React JS, and have a great understanding of the fundamentals of web dev - HTML, CSS, and Javascript. I also have experience working with Firebase databases.</p>
                <p className="who-i-am-description">My background is in fitness; I have been in the industry as a trainer for 7+ years, and am looking to hopefully bridge the gap between the physical and technological. I believe there is huge potential in using tech to better our understanding of our own health & fitness.</p>
            </div>
        </main>
    )
}
