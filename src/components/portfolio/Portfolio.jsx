import React from 'react'
import "./portfolio.css"
import tiwiserImg from '../../assets/panel-tiwiser.svg'

const Portfolio = () => {
    //@TODO Live demo altına detayları ekle
    return (
        <section id={"portfolio"}>
            <h5>Projects I worked</h5>
            <h2>Check The Source</h2>
            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={tiwiserImg} alt="panel tiwiser live preview"/>
                    </div>
                    <h3>Tiwiser Panel</h3>
                    <a href="https://panel.tiwiser.com/landing" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
                </article>
            </div>
        </section>
    )
}

export default Portfolio
