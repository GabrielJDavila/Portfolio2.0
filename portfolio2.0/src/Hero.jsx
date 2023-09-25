import { useState, useEffect } from "react"

export default function Hero() {
    // const [text, setText] = useState("Frontend developer.")
    const [textIndex, setTextIndex] = useState(0)

    const textValues = ["Frontend developer.", "Creative problem solver.", "Continuous learner of things."]
    
    const text = textValues.map(item => {
        return (
            <p className="hero-description-title">{item}</p>
        )
    })
    // useEffect(() => {
    //     const cycleText = () => {
    //         setTextIndex((prevIndex) => (prevIndex + 1) % textValues.length)
    //     }

    //     const textChangeInterval = setInterval(cycleText, 4000)

    //     return () => {
    //         clearInterval(textChangeInterval)
    //     }

    // }, [])

    // const currentText = textValues[textIndex]
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
            
            {/* <p className={`hero-description-title ${textIndex % 2 === 0 ? "slide-out" : "slide-in"}`}>{currentText}</p> */}
        </div>
    )
}