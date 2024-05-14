import React from 'react'
import './hero.scss'
import { GoArrowRight } from "react-icons/go";
import iphone from '../../assets/hero-iphone.svg'

const Hero = () => {
  return (
    <section className="hero container">
            <div className="hero__content">
                <h3><img src={iphone} alt="" /> iPhone 14 Series</h3>
                <h1>Up to 10% <br /> off Voucher</h1>
                <a href="#">Shop Now <GoArrowRight /></a>
            </div>
        </section>
  )
}

export default Hero