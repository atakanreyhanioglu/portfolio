import React from 'react'
import "./nav.css"
import {BiHomeSmile, BiUser, BiBookReader, BiCodeBlock, BiMessageSquareEdit} from 'react-icons/bi'

const Nav = () => {
    return (
        <nav>
            <a href="#home"><BiHomeSmile/></a>
            <a href="#about"><BiUser/></a>
            <a href="#experience"><BiBookReader/></a>
            <a href="#services"><BiCodeBlock/></a>
            <a href="#contact"><BiMessageSquareEdit/></a>
        </nav>
    )
}

export default Nav
