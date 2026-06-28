import React from 'react'
import heroImage from '../../assets/image.png'

const Hero = () => {
  return (
    <div className='relative w-full h-screen py-20'>
      <img className='w-full h-full object-cover absolute inset-0 z-1' src={heroImage} alt="Hero illustration" />
      <div className=' '>

      </div>
    </div>
  )
}

export default Hero