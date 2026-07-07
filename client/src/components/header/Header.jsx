import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = ({ showBackground , ref, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const handleScrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const handleCloseMobileMenu = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  }

  return (
    <div className={`fixed mt-0 left-0 right-0 z-10 py-2.5 transition-all duration-300 ease-in-out ${showBackground ? 'bg-header-background shadow-header-shadow' : 'bg-transparent'}`}>
     <div className='w-full mx-auto px-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330'>
        <div className='flex items-center justify-between'>
           
           <Link to={"/"}>
               <span className='text-[30px] font-bold text-heading cursor-pointer'>PMMP</span>
           </Link>

            
            <nav className='hidden xl:block text-nav text-4 font-poppins font-normal'>
                <button className={`py-4.5 px-3.75 cursor-pointer transition duration-300 ${activeSection === 'hero' ? 'text-default' : 'hover:text-default'}`} onClick={() => handleScrollToSection(ref.hero) }>Home</button>
                <button className={`py-4.5 px-3.75 cursor-pointer transition duration-300 ${activeSection === 'about' ? 'text-default' : 'hover:text-default'}`} onClick={() => handleScrollToSection(ref.about)}>About</button>
                <button className={`py-4.5 px-3.75 cursor-pointer transition duration-300 ${activeSection === 'service' ? 'text-default' : 'hover:text-default'}`} onClick={() => handleScrollToSection(ref.service)}>Services</button>
                <button className={`py-4.5 px-3.75 cursor-pointer transition duration-300 ${activeSection === 'portfolio' ? 'text-default' : 'hover:text-default'}`} onClick={() => handleScrollToSection(ref.portfolio)}>Portfolio</button>
                <button className={`py-4.5 px-3.75 cursor-pointer transition duration-300 ${activeSection === 'contact' ? 'text-default' : 'hover:text-default'}`} onClick={() => handleScrollToSection(ref.contact)}>Contact</button>
            </nav>
          
        {!isMobileMenuOpen ? (
           <div className='xl:hidden cursor-pointer' onClick={() => setIsMobileMenuOpen(true)}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-heading">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>   
         </div>

        ) : (
             ""
        )}


       
          


        </div>
    </div>

 {/* mobile menu */}

 {isMobileMenuOpen && (

  <div className='fixed top-0 left-0 right-0 bottom-0 bg-layer2 z-200 transition-all duration-300 ease-in-out xl:hidden'>
      <ul className="absolute top-15 left-5 right-5 bottom-5 transition-all duration-300 ease-in-out bg-white rounded-[5px] p-5  text-description text-4 font-poppins font-normal">
        <li className={`py-3 cursor-pointer transition duration-300 ${activeSection === 'hero' ? 'text-accent1' : 'hover:text-accent1'}`} onClick={() => handleCloseMobileMenu(ref.hero)}>Home</li>
        <li className={`py-3 cursor-pointer transition duration-300 ${activeSection === 'about' ? 'text-accent1' : 'hover:text-accent1'}`} onClick={() => handleCloseMobileMenu(ref.about)}>About</li>
        <li className={`py-3 cursor-pointer transition duration-300 ${activeSection === 'service' ? 'text-accent1' : 'hover:text-accent1'}`} onClick={() => handleCloseMobileMenu(ref.service)}>Services</li>
        <li className={`py-3 cursor-pointer transition duration-300 ${activeSection === 'portfolio' ? 'text-accent1' : 'hover:text-accent1'}`} onClick={() => handleCloseMobileMenu(ref.portfolio)}>Portfolio</li>
        <li className={`py-3 cursor-pointer transition duration-300 ${activeSection === 'contact' ? 'text-accent1' : 'hover:text-accent1'}`} onClick={() => handleCloseMobileMenu(ref.contact)}>Contact</li>
      </ul>

      <div className="absolute top-5 right-5 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-white">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>

      </div>
  </div>

 )}
  




    </div>
  )
}

export default Header