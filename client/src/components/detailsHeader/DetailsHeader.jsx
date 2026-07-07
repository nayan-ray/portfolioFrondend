import React from 'react'
import {Link} from 'react-router-dom'

const DetailsHeader = ({ showBackground }) => {
  return (
    <div className={`fixed mt-0 left-0 right-0 z-10 py-2.5 transition-all duration-300 ease-in-out ${showBackground ? 'bg-header-background shadow-header-shadow' : 'bg-transparent'}`}>
     <div className='w-full mx-auto px-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330'>
        <div className='flex items-center justify-between'>
        <Link to={"/"}>
             <span className='text-[30px] font-bold text-heading cursor-pointer'>PMMP</span>
        </Link>

            
           <span className='text-[20px] font-bold text-heading sm:text-[30px]'>PRODUCT DETAILS</span>
        </div>
    </div>
    </div>
  )
}

export default DetailsHeader