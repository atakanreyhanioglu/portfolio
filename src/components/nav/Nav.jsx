import React from 'react'
import "./nav.css"
import {BiHomeSmile, BiUser, BiBookReader, BiCodeBlock, BiMessageSquareEdit} from 'react-icons/bi'
import {useState} from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#home')
    return (
        <nav>
            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><BiHomeSmile/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookReader/></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BiCodeBlock/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareEdit/></a>
        </nav>
    )
}

export default Nav
