import React from 'react'
import './home.scss'
import Hero from '../../components/hero'
import Products from '../../components/products'
import About from '../../components/about'

const Home = () => {
  return (
    <>
        <main>
            <Hero />
            <Products />
            <About />
        </main>
    </>
  )
}

export default Home