import React from 'react'

const Header = ({ showBackground }) => {
  return (
    <div className={`fixed mt-0 left-0 right-0 z-10 py-2.5 transition-all duration-300 ease-in-out ${showBackground ? 'bg-header-background shadow-header-shadow' : 'bg-transparent'}`}>
     <div className='w-full mx-auto px-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330'>
        <div className='flex items-center justify-between'>
            <span className='text-[30px] font-bold text-heading'>PMMP</span>
            <nav className='hidden xl:block text-nav text-4 font-poppins font-normal'>
                <button className='py-4.5 px-3.75 transition duration-300 hover:text-default'>Home</button>
                <button className='py-4.5 px-3.75 transition duration-300 hover:text-default'>About</button>
                <button className='py-4.5 px-3.75 transition duration-300 hover:text-default'>Services</button>
                <button className='py-4.5 px-3.75 transition duration-300 hover:text-default'>Testimonial</button>
                <button className='py-4.5 px-3.75 transition duration-300 hover:text-default'>Contact</button>
            </nav>
          

         <div className='xl:hidden'>  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-heading">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>   
         </div>
          


        </div>
    </div>
    </div>
  )
}

export default Header