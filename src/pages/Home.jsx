import React from 'react'
import { AboutHome, ContactHome, HeroSection, Navbar, Projects, QuoteImg, Skills, Footer } from '../components'

const Home = () => {
  return (
    <div className="">
        <HeroSection />
        <QuoteImg />
        <Projects />
        <Skills />
        <AboutHome />
        <ContactHome />
    </div>
  )
}

export default Home