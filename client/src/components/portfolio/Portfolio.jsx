import React from 'react'
import product1 from "../../assets/product-1.jpg"
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className='py-15'>
        <div className='pb-15 text-center w-full mx-auto px-3 z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330'>
              <h2 className='text-[32px] font-light mb-3.75 text-[#777777] font-playfair leading-[1.2]'>Portfolio</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className='w-full mx-auto px-3 z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330'>
              
              <ul className='mb-5 text-center flex items-center justify-center gap-2.5 sm:gap-5 flex-wrap font-roboto'>
                  <li className='cursor-pointer inline-block text-[14px] sm:text-[18px] font-medium leading-none transition duration-300 hover:text-accent'>All</li>
                  <li className='cursor-pointer inline-block text-[14px] sm:text-[18px] font-medium leading-none transition duration-300 hover:text-accent'>Figma_Design</li>
                  <li className='cursor-pointer inline-block text-[14px]  sm:text[18px]  font-medium leading-none transition duration-300 hover:text-accent'>Frond-End_Design</li>
                  <li className='cursor-pointer inline-block text-[14px]  sm:text[18px]  font-medium leading-none transition duration-300 hover:text-accent'>Back-End_API</li>
                  <li className='cursor-pointer inline-block text-[14px]  sm:text[18px]  font-medium leading-none transition duration-300 hover:text-accent'>Full-Stack_Development</li>
              </ul>


              <div className='flex flex-col flex-wrap   md:flex-row '>
                   <div className='mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 '>
                      <div className='relative truncate group'>
                          <img className='w-full object-cover transition duration-300 group-hover:scale-[1.1]'  src={product1} alt="product1" />
                          <div className='absolute inset-0  bg-layer flex flex-col transition duration-300  opacity-0 group-hover:opacity-100'>
                              <h4 className='text-[14px] p-4 inline-block bg-accent font-playfair font-normal text-white'>Product Name</h4>
                             
                       <Link to={"/portfolio/1"}>
                        <button className=' self-center justify-self-center flex items-center gap-2.5 mt-8.5 text-[16px] bg-accent py-3 px-5 rounded-[5px] text-white cursor-pointer'>
                                Show Details
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                   </svg>


                            </button>
                       
                       </Link>
                            
                           
                             
                          </div>
                      </div>

                  </div>
                   

                   <div className='mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 '>
                      <div className='relative truncate group'>
                          <img className='w-full object-cover transition duration-300 group-hover:scale-[1.1]'  src={product1} alt="product1" />
                          <div className='absolute inset-0  bg-layer flex flex-col transition duration-300  opacity-0 group-hover:opacity-100'>
                              <h4 className='text-[14px] p-4 inline-block bg-accent font-playfair font-normal text-white'>Product Name</h4>
                             
                            <button className=' self-center justify-self-center flex items-center gap-2.5 mt-8.5 text-[16px] bg-accent py-3 px-5 rounded-[5px] text-white cursor-pointer'>
                                Show Details
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                   </svg>


                            </button>
                             
                          </div>
                      </div>

                  </div>


                  <div className='mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 '>
                      <div className='relative truncate group'>
                          <img className='w-full object-cover transition duration-300 group-hover:scale-[1.1]'  src={product1} alt="product1" />
                          <div className='absolute inset-0  bg-layer flex flex-col transition duration-300  opacity-0 group-hover:opacity-100'>
                              <h4 className='text-[14px] p-4 inline-block bg-accent font-playfair font-normal text-white'>Product Name</h4>
                             
                            <button className=' self-center justify-self-center flex items-center gap-2.5 mt-8.5 text-[16px] bg-accent py-3 px-5 rounded-[5px] text-white cursor-pointer'>
                                Show Details
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                   </svg>


                            </button>
                             
                          </div>
                      </div>

                  </div>

                  <div className='mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 '>
                      <div className='relative truncate group'>
                          <img className='w-full object-cover transition duration-300 group-hover:scale-[1.1]'  src={product1} alt="product1" />
                          <div className='absolute inset-0  bg-layer flex flex-col transition duration-300  opacity-0 group-hover:opacity-100'>
                              <h4 className='text-[14px] p-4 inline-block bg-accent font-playfair font-normal text-white'>Product Name</h4>
                             
                            <button className=' self-center justify-self-center flex items-center gap-2.5 mt-8.5 text-[16px] bg-accent py-3 px-5 rounded-[5px] text-white cursor-pointer'>
                                Show Details
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                   </svg>


                            </button>
                             
                          </div>
                      </div>

                  </div>


                  <div className='mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 '>
                      <div className='relative truncate group'>
                          <img className='w-full object-cover transition duration-300 group-hover:scale-[1.1]'  src={product1} alt="product1" />
                          <div className='absolute inset-0  bg-layer flex flex-col transition duration-300  opacity-0 group-hover:opacity-100'>
                              <h4 className='text-[14px] p-4 inline-block bg-accent font-playfair font-normal text-white'>Product Name</h4>
                             
                            <button className=' self-center justify-self-center flex items-center gap-2.5 mt-8.5 text-[16px] bg-accent py-3 px-5 rounded-[5px] text-white cursor-pointer'>
                                Show Details
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                   </svg>


                            </button>
                             
                          </div>
                      </div>

                  </div>

                  <div className='mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 '>
                      <div className='relative truncate group'>
                          <img className='w-full object-cover transition duration-300 group-hover:scale-[1.1]'  src={product1} alt="product1" />
                          <div className='absolute inset-0  bg-layer flex flex-col transition duration-300  opacity-0 group-hover:opacity-100'>
                              <h4 className='text-[14px] p-4 inline-block bg-accent font-playfair font-normal text-white'>Product Name</h4>
                             
                              <button className=' self-center justify-self-center flex items-center gap-2.5 mt-8.5 text-[16px] bg-accent py-3 px-5 rounded-[5px] text-white cursor-pointer'>
                                Show Details
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                   </svg>


                            </button>
                             
                          </div>
                      </div>

                  </div>



                






              </div>
        </div>
    </div>
  )
}

export default Portfolio