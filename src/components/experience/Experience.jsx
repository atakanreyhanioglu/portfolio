import React from 'react'
import "./experience.css"
import {FaNodeJs} from "react-icons/fa";
import {
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiNestjs,
    SiExpress,
    SiVuedotjs,
    SiAngular,
    SiNuxtdotjs,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiRedis,
    SiHeroku,
    SiFirebase,
    SiVercel,
    SiGooglecloud,
    SiJira,
    SiDocker
} from "react-icons/si";

const Experience = () => {
    return (
        <section id={"experience"}>
            <h5>Skills I Have</h5>
            <h2>Tech Badges</h2>
            <div className={"container experience__container"}>
                <div className="experience__languages">
                    <h3>Languages</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaNodeJs className="experience-icon"/>
                            <div>
                                <h4>Node.JS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiJavascript className="experience-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiTypescript className="experience-icon"/>
                            <div>
                                <h4>TypeScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiHtml5 className="experience-icon"/>
                            <div>
                                <h4>HTML5</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiCss3 className="experience-icon"/>
                            <div>
                                <h4>CSS3</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__frameworks">
                    <h3>Frameworks</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <SiNestjs className="experience-icon"/>
                            <div>
                                <h4>NestJS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiExpress className="experience-icon"/>
                            <div>
                                <h4>Express</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiVuedotjs className="experience-icon"/>
                            <div>
                                <h4>Vue.js</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiAngular className="experience-icon"/>
                            <div>
                                <h4>Angular</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiNuxtdotjs className="experience-icon"/>
                            <div>
                                <h4>Nuxt.js</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__databases">
                    <h3>Databases</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <SiMongodb className="experience-icon"/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiPostgresql className="experience-icon"/>
                            <div>
                                <h4>Postgresql</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiMysql className="experience-icon"/>
                            <div>
                                <h4>Mysql</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiRedis className="experience-icon"/>
                            <div>
                                <h4>Redis</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__other">
                    <h3>Hosting & Others</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <SiDocker className="experience-icon"/>
                            <div>
                                <h4>Docker</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiHeroku className="experience-icon"/>
                            <div>
                                <h4>Heroku</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiVercel className="experience-icon"/>
                            <div>
                                <h4>Vercel</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiGooglecloud className="experience-icon"/>
                            <div>
                                <h4>GoogleCloud</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiFirebase className="experience-icon"/>
                            <div>
                                <h4>FireBase</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiJira className="experience-icon"/>
                            <div>
                                <h4>Jira</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
