import React from 'react'
import product1 from "../../assets/product-1.jpg"

const ProjectInfo = () => {
  return (
    <div className='text-description bg-white py-15 '>

        <div className='w-full mx-auto px-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330'>
           <div className='flex flex-col flex-wrap lg:flex-row'>
               <div className='w-full mb-6 px-3 lg:w-2/3'>
                  <img className='w-full object-cover' src={product1} alt="productImg.jpg" />
               </div>
               <div className='w-full px-3 mb-6 lg:w-1/3'>
                   <div className='p-7.5  bg-white shadow-info'>
                      <h3 className='text-[22px] font-bold mb-5 font-playfair pb-5 border-b border-solid border-[color-mix(in_srgb,var(--color-description),transparent_85%)]'>Project Information</h3>
                      <ul className='p-0 text-[15px]  list-none font-roboto'>
                         <li className='mb-2.5'>
                            <strong>Type : </strong>
                            Web Design
                         </li>
                          <li className='mb-2.5'>
                            <strong>Visits URL : </strong>
                            Web Design web web web web design
                         </li>
                        
                         <li className='mb-2.5'>
                            <strong>Tools: </strong>
                            Web Design web web web web design
                         </li>


                      </ul>
                   </div>
               </div>

           </div>
           <div className='my-6'>
              <h2 className='leading-[1.2] text-[26px] font-bold mb-5 text-center font-playfair'>Project Description</h2>
              <p className='font-roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius, porro repudiandae doloribus rerum sed veniam deserunt enim, maiores nemo corrupti optio cum autem ipsam veritatis, nobis tempore a fuga?</p>
           </div>
           <div>
               <h2 className='leading-[1.2] text-[26px] font-bold mb-5 text-center'>Product Usage</h2>
               <ul className='p-0 text-[15px]  list-none font-roboto '>
                         <li className='mb-2.5'>
                            <strong>Step 1 : </strong>
                            Web Design
                         </li>
                          <li className='mb-2.5'>
                            <strong>Step 2 : </strong>
                            Web Design web web web web design
                         </li>
                        
                         <li className='mb-2.5'>
                            <strong>Step 3: </strong>
                            Web Design web web web web design
                         </li>


                      </ul>
           </div>

        </div>
    </div>
  )
}

export default ProjectInfo