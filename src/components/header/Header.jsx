import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/me-digital.svg'
import Socials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Atakan Reyhanioglu</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>
                <Socials/>
                <div className="me">
                    <img src={ME} alt="my digital picture."/>
                </div>
            </div>
            <a href="#contact" className="scroll__down">Scroll Down</a>
        </header>
    )
}

export default Header
