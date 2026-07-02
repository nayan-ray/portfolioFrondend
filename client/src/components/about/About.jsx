import React from 'react'
import profileImg from "../../assets/profile-img.jpg"

const About = () => {
  return (
    <div className='py-15'>
        <div className='pb-15 text-center w-full mx-auto px-3 z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330' data-aos="fade-up">
              <h2 className='text-[32px] font-light mb-3.75 text-[#777777] font-playfair leading-[1.2] ' >About</h2>
             
        </div>
        <div className='w-full mx-auto z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330' data-aos="fade-up" data-aos-delay="100">
              <div className='flex flex-col flex-wrap lg:flex-row lg:justify-between'>
                  <div className='w-full xs:max-[598px]:truncate lg:w-1/3 '>
                      <div className='w-full border-20 border-solid border-accent'>
                         <img src={profileImg} className='max-w-full object-cover h-auto -mt-15 ml-10 mb-10 relative z-2' alt="profile.jpg" />
                      </div>
                      

                  </div>
                  <div className=' mt-6 mx-3 md:px-3 md:mx-0 lg:w-7/12 lg:mt-0'>
                       <h3 className='text-[28px] font-bold text-[#777777] font-playfair mb-2 leading-[1.2]'>
                        Im a ux /ui designer austin based who loves clean, simple & unique design. i also enjoy crafting brand identities, icons, & ilustration work.
                       </h3>
                       <p className='font-roboto'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                       </p>
                  </div>
                  
                 
              </div>
        </div>
    </div>
  )
}

export default About