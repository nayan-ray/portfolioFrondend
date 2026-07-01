import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import Header from '../../components/header/Header'
import Service from '../../components/service/Service'
import Portfolio from '../../components/portfolio/Portfolio'
import Contact from '../../components/contact/Contact'
import About from '../../components/about/About'
import Footer from '../../components/footer/Footer'
import ProgessRing from '../../components/progessRing/ProgessRing'

const Home = () => {

  const [updatedScrollY, setUpdatedScrollY] = useState(0);


  useEffect(()=>{

      const handleScroll = () => {
         const scrollY = window.scrollY;
         const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
         const scrollPercentage = (scrollY / documentHeight) * 100;
         setUpdatedScrollY(scrollPercentage);

      }

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      }


  },[])


  return (
  <>

     <ProgessRing updatedScrollY={updatedScrollY}/>
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
