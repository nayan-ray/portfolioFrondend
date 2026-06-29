import React from 'react'
import Hero from '../../components/hero/Hero'
import Header from '../../components/header/Header'
import Service from '../../components/service/Service'
import Portfolio from '../../components/portfolio/Portfolio'
import Contact from '../../components/contact/Contact'
import About from '../../components/about/About'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
  <>
     <Header />
     <div>
        <Hero />
     </div>
     <About />
     <Service />
     <Portfolio />
     <Contact /> 
     <Footer /> 
    
 </>
  )
}

export default Home
