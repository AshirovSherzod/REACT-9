import React from 'react'
import './about.scss'
import service from '../../assets/about-service.svg'
import services from '../../assets/about-services.svg'
import money from '../../assets/about-money.svg'


const About = () => {
  return (
    <section className="about container">
            <div className="about__card">
                <div className="about__card__img">
                    <img src={service} alt="" />
                </div>
                <h2>FREE AND FAST DELIVERY</h2>
                <p>Free delivery for all orders over $140</p>
            </div>
            <div className="about__card">
                <div className="about__card__img">
                    <img src={services} alt=""/>
                </div>
                <h2>24/7 CUSTOMER SERVICE</h2>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div className="about__card">
                <div className="about__card__img">
                    <img src={money} alt=""/>
                </div>
                <h2>MONEY BACK GUARANTEE</h2>
                <p>We reurn money within 30 days</p>
            </div>
        </section>
  )
}

export default About