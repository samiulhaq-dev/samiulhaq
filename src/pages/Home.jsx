import React from 'react'
import { AboutHome, ContactHome, HeroSection, Navbar, Projects, QuoteImg, Skills, Footer } from '../components'

const Home = () => {
  return (
    <div className="max-w-[1200px] m-auto px-5">
        <Navbar />
        <HeroSection />
        <QuoteImg />
        <Projects />
        <Skills />
        <AboutHome />
        <ContactHome />
        <Footer />
    </div>
  )
}

export default Home