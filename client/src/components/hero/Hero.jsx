import React from 'react'
import { ReactTyped } from "react-typed";
import heroImage from '../../assets/image.png'

const Hero = () => {
  return (
    <div className="relative before:content-[''] before:absolute before:inset-0 before:z-2 before:bg-[color-mix(in_srgb,var(--color-background),transparent_80%)] w-full h-screen py-20 flex items-center justify-items-center ">
      <img className='w-full h-full object-cover absolute inset-0 z-1' src={heroImage} alt="Hero illustration" />
      <div className='relative w-full mx-auto px-3 z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330'>
         <h2 className='xs:max-[768px]:text-[32px] text-[64px] font-playfair font-bold text-heading leading-[1.2] '>
           Nayan Kumar
         </h2>
         <p className='xs:max-[768px]:text-[20px] text-[26px] mt-1.25 text-default font-roboto '>
          <span>I'm </span> 
           <ReactTyped
            strings={[
                "UI/UX Designer",
                 "Full Stack MERN Developer",
                 "React Developer",
                 "Problem Solver"
               ]}
             typeSpeed={60}
             backSpeed={40}
             backDelay={1500}
             startDelay={500}
             loop
             showCursor
             cursorChar="|"
             smartBackspace
         />
         </p>
      </div>
    </div>
  )
}

export default Hero