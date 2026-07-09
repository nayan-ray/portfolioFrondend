import React, { useEffect, useState } from 'react'




const ProjectInfo = ({ product }) => {


  const text =product?.usage;
  const steps = text?.split(',');

  
  return (
    <div className='text-description bg-white py-15 '>

        <div className='w-full mx-auto px-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330' data-aos="fade-up" data-aos-delay="100">
           <div className='flex flex-col flex-wrap lg:flex-row'>
               <div className='w-full mb-6 px-3 lg:w-2/3'>
                  <img className='w-full object-cover' src={product?.product?.productImg} alt="productImg.jpg" />
               </div>  
               <div className='w-full px-3 mb-6 lg:w-1/3' data-aos="fade-up" data-aos-delay="200">
                   <div className='p-7.5  bg-white shadow-info'>
                      <h3 className='text-[22px] font-bold mb-5 font-playfair pb-5 border-b border-solid border-[color-mix(in_srgb,var(--color-description),transparent_85%)]'>Project Information</h3>
                      <ul className='p-0 text-[15px]  list-none font-roboto'>
                         <li className='mb-2.5'>
                            <strong>Type : </strong>
                            {product?.type}
                         </li>

                          <li className='mb-2.5'>
                            <strong>Status : </strong>
                            {product?.status}
                         </li>




                          <li className='mb-2.5'>
                            <strong>Visits URL : </strong>
                            <a className='text-blue-500 hover:text-blue-700' href={product?.visitLink} target="_blank" rel="noopener noreferrer">
                              {product?.visitLink}
                            </a>
                            
                         </li>
                        
                         <li className='mb-2.5'>
                            <strong>Tools : </strong>
                            {product?.tools}
                         </li>


                      </ul>
                   </div>
               </div>

           </div>
           <div className='my-6' data-aos="fade-up" data-aos-delay="300">
              <h2 className='leading-[1.2] text-[26px] font-bold mb-5 text-center font-playfair'>Project Description</h2>
              <p className='font-roboto'>{product?.description}</p>
           </div>
           <div data-aos="fade-up" data-aos-delay="400">
               <h2 className='leading-[1.2] text-[26px] font-bold mb-5 text-center'>Product Usage</h2>
               <ul className='p-0 text-[15px]  list-none font-roboto '>

                         {product?.usage && steps.map((step, index) => (
                            <li key={index} className='mb-2.5'>
                               <strong>Step {index + 1} : </strong>
                               {step}
                            </li>
                         ))}
                         


                      </ul>
           </div>

        </div>
    </div>
  )
}

export default ProjectInfo