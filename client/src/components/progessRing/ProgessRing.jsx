import React from 'react'

const ProgessRing = ({ updatedScrollY }) => {

 const strokeDasharray = 2 * Math.PI * 44; // Circumference of the circle
 const strokeDashoffset = strokeDasharray - (updatedScrollY / 100) * strokeDasharray;

  return (
    <div className="fixed bottom-6 right-6 flex items-center justify-center z-50 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg className='w-16 h-16' viewBox='0 0 100 100'>
          <circle cx='50' cy='50' r='44' fill='none' stroke='#e5e7eb' strokeWidth='6'/>
          <circle cx='50' cy='50' r='44' fill='none' stroke='#b8a07e' strokeWidth='6' strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} strokeLinecap='round' transform='rotate(-90 50 50)' className='transition-all duration-300 ease-out'/>
         
         <path d='M30 58 L50 38 L70 58 M50 58 L50 68' fill='none' stroke='#777777' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round'/>

       </svg> 
    </div>
  )
}

export default ProgessRing