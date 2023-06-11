import React from 'react'
import { HeroSection, Navbar, Projects, QuoteImg } from '../components'

const Home = () => {
  return (
    <div className="max-w-[1200px] m-auto px-5">
        <Navbar />
        <HeroSection />
        <QuoteImg />
        <Projects />
    </div>
  )
}

export default Home