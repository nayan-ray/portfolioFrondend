import React from 'react'

const ProjectInfo = () => {
  return (
    <div className='text-[#898989] bg-white py-15 '>

        <div className='w-full mx-auto px-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330'>
           <div className='flex flex-col flex-wrap lg:flex-row'>
               <div className='w-full mb-6 lg:w-2/3'>
                  img
               </div>
               <div className='w-full bg-white shadow-info p-7.5 lg:w-1/3'>
                 project Info
               </div>

           </div>
           <div className='my-6'>
              <h2 className='leading-[1.2] text-[26px] font-bold mb-5 text-center'>Project Description</h2>
              <p>something</p>
           </div>
           <div>
               <h2 className='leading-[1.2] text-[26px] font-bold mb-5 text-center'>Product Usage</h2>
               <p>something</p>
           </div>

        </div>
    </div>
  )
}

export default ProjectInfo