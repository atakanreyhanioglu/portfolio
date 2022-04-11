import React from 'react'
import "./portfolio.css"
import tiwiserImg from '../../assets/panel-tiwiser.svg'
import digibook from '../../assets/digibook.svg'
import colorsNuxt from '../../assets/clors-nuxt.svg'

const Portfolio = () => {
    //@TODO Live demo altına detayları ekle
    return (
        <section id={"portfolio"}>
            <h5>Projects I worked</h5>
            <h2>Check The Source</h2>
            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <a href="https://panel.tiwiser.com/landing" rel="noreferrer" target="_blank">
                        <h4 className="title">Tiwiser Dashboard</h4>
                        <div className="portfolio__item-image">
                            <img src={tiwiserImg} alt=" tiwiser dashboard live preview"/>
                        </div>
                    </a>
                </article>
                <article className="portfolio__item">
                    <a href="https://colors-nuxt.vercel.app" rel="noreferrer" target="_blank">
                        <h4 className="title">Webcolors</h4>
                        <div className="portfolio__item-image">
                            <img src={colorsNuxt} alt="Colors for images live preview"/>
                        </div>
                    </a>
                </article>
                <article className="portfolio__item">
                    <a href="https://panel.tiwiser.com/landing" rel="noreferrer" target="_blank">
                        <h4 className="title">Tiwiser Digibook</h4>
                        <div className="portfolio__item-image">
                            <img src={digibook} alt="Digibook tiwiser live preview"/>
                        </div>
                    </a>
                </article>
            </div>
        </section>
    )
}

export default Portfolio
