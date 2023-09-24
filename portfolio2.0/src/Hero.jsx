import { useState, useEffect } from "react"

export default function Hero() {
    // const [text, setText] = useState("Frontend developer.")
    const [textIndex, setTextIndex] = useState(0)

    const textValues = ["Frontend developer.", "Creative problem solver.", "Fitness and videogame nerd.", "Continuous learner of things."]

    useEffect(() => {
        const cycleText = () => {
            setTextIndex((prevIndex) => (prevIndex + 1) % textValues.length)
            // const currentIndex = textValues.indexOf(text)
            // const nextIndex = (currentIndex + 1) % textValues.length
            // setText(textValues[nextIndex])
        }

        const textChangeInterval = setInterval(cycleText, 3000)

        return () => {
            clearInterval(textChangeInterval)
        }

    }, [])

    const currentText = textValues[textIndex]

    return (
        <div className="hero-container">
            {/* <img src="./dist/sittingportrait.png" className="hero-logo"></img> */}
            <h1 className="hero-title">Gabriel Davila</h1>
            <p className={`hero-description-title ${textIndex % 2 === 0 ? "slide-out" : "slide-in"}`}>{currentText}</p>
        </div>
    )
}