import React from 'react'
import CV from '../../assets/Atakan-resume (1).pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className={"btn"}>Download CV</a>
            <a href="#contact" className={"btn btn-primary"}>Let's Be Friends</a>
        </div>
    )
}

export default CTA
