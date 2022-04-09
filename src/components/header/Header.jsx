import React from 'react'
import "./header.css"
import CTA from './CTA'
import Socials from './HeaderSocials'
import Avatar from '../../assets/ReadyPlayerMe-Avatar (1).png'
import SvgBg from '../../assets/digital-bg.svg'


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
                    <img src={Avatar} alt="my digital 3D avatar."/>
                </div>
                <img src={SvgBg} className={"svg"} alt="svg background for avatar."/>
            </div>
            <a href="#contact" className="scroll__down">Scroll Down</a>
        </header>
    )
}

export default Header
