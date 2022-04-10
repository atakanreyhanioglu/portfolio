import React from 'react'
import "./about.css"
import ME from '../../assets/me-digital.svg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
    return (
        <section id={"about"} className={"about"}>
            <h5> Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <img className={"digital-face about__me-image"} src={ME} alt="digital face 2D."/>
                </div>
                <div className="about__content">
                    <div className={"about__cards"}>
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experiences</h5>
                            <small>10+ Teammates</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>60+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>12+ Completed</small>
                        </article>
                    </div>
                    <p>
                        I'm a software developer who strives to be able to do anything by learning and practicing.
                        Let's meet and enjoy the happiness of creating new valuable apps together.
                    </p>
                    <a href="#contact" className={"btn btn-primary"}>Let's be friends</a>
                </div>
            </div>
        </section>


    )
}

export default About
