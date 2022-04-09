import React from 'react'
import {FaLinkedin, FaGithub, FaMedium} from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className={"header__socials"}>
            <a href="https://medium.com/@atakan.reyhanioglu" rel="noreferrer" target="_blank"><FaMedium/></a>
            <a href="https://www.linkedin.com/in/atakan-reyhanio%C4%9Flu-631730185/" rel="noreferrer"
               target="_blank"><FaLinkedin/></a>
            <a href="https://github.com/atakanreyhanioglu" rel="noreferrer" target="_blank"><FaGithub/></a>
        </div>
    )
}

export default HeaderSocials
