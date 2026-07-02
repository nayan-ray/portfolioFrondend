import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
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
  const [showHeaderBackground, setShowHeaderBackground] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("about");

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);


  //useEffect to scroll to top when the component is mounted
 

    useEffect(()=>{

         if (location.state?.scrollTo === "portfolio") {
   
             portfolioRef.current?.scrollIntoView({
                   behavior: "smooth",
               });
          
      // Remove the state so refresh won't scroll again
         const timer = setTimeout(() => {
             navigate(location.pathname, {
             replace: true,
              state: null,
            });
         }, 500); // Wait for the scroll animation

    return () => clearTimeout(timer);

         }else{
           window.scrollTo({
           top: 0,
            behavior: "smooth",
           
      });
         }

    },[location, navigate]);

//add AOS (Animate On Scroll) initialization

useEffect(() => {

    AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        mirror: false,
        offset: 100,
    });

}, []);
    




  useEffect(()=>{

      const handleScroll = () => {
         const scrollY = window.scrollY;
         const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
         const scrollPercentage = (scrollY / documentHeight) * 100;
         setUpdatedScrollY(scrollPercentage);

         if (scrollY > 50) {
           setShowHeaderBackground(true);
         } else {
           setShowHeaderBackground(false);
         }
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      }


  },[])

useEffect(() => {
  const sections = [
    heroRef,
    aboutRef,
    portfolioRef,
    serviceRef,
    contactRef,
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach((section) => {
    if (section.current) {
      observer.observe(section.current);
    }
  });

  return () => observer.disconnect();
}, []);



  return (
  <>

     <ProgessRing updatedScrollY={updatedScrollY}/>
     <Header showBackground={showHeaderBackground} ref={{hero: heroRef, about: aboutRef, portfolio: portfolioRef, service: serviceRef, contact: contactRef}} activeSection={activeSection}/>
     <section id='hero' ref={heroRef}>
        <Hero />
     </section>
     <section id='about' className=' scroll-mt-20' ref={aboutRef}>
       <About />
     </section>
     <section id='service' className=' scroll-mt-20' ref={serviceRef}>
       <Service />
     </section>
     <section id='portfolio' className=' scroll-mt-20' ref={portfolioRef}>
       <Portfolio />
     </section>
     <section id='contact' className=' scroll-mt-20' ref={contactRef}>
      <Contact /> 
     </section>
     
     <Footer /> 
    
 </>
  )
}

export default Home
