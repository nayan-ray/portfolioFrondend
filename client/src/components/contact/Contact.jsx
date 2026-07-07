import React from 'react'

const Contact = () => {
  return (
    <div className='py-15'>
        <div className='pb-15 text-center w-full mx-auto px-3 z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330' data-aos="fade-up">
              <h2 className='text-[32px] font-light mb-3.75 text-[#777777] font-playfair leading-[1.2]'>Contact</h2>
              <p>I'm available for freelance projects, collaborations, and full-time opportunities.</p>
        </div>
        <div className='w-full mx-auto px-3 z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330' data-aos="fade-up" data-aos-delay="100">
              <div className='p-7.5 text-white shadow-contact'>

                <div className='flex flex-col flex-wrap   lg:flex-row'>
                  
                     <div className=' mb-7.5 w-full group md:px-3 lg:w-1/3 ' data-aos="fade-up" data-aos-delay="200">
                        <div className='flex flex-row items-center '>
                           <div className='w-14 h-14 flex items-center justify-center shrink-0 border border-solid border-accent1 rounded-[50%] transition duration-300 group-hover:bg-accent1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent1 transition duration-300 group-hover:text-white">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                             </svg>

                           </div>
                          
                          
                           <div className='ms-3.75'>
                               <h4 className='text-[#777777] font-bold font-playfair mb-0.5 leading-[1.2] transition duration-300 text-[18px] group-hover:text-accent1'>
                                 Address
                                </h4>
                                <p className='text-[14px] text-description font-roboto leading-normal'>
                                  Bangladesh
                               </p>
                         </div>
                          

                       </div>

                    </div>

                    <div className=' mb-7.5 w-full group md:px-3 lg:w-1/3 ' data-aos="fade-up" data-aos-delay="300">
                        <div className='flex flex-row items-center '>
                           <div className='w-14 h-14 flex items-center justify-center shrink-0 border border-solid border-accent1 rounded-[50%] transition duration-300 group-hover:bg-accent1'>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent1 transition duration-300 group-hover:text-white">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                             </svg>

                           </div>
                          
                          
                           <div className='ms-3.75'>
                               <h4 className='text-[#777777] font-bold font-playfair mb-0.5 leading-[1.2] transition duration-300 text-[18px] group-hover:text-accent1'>
                                 Phone
                                </h4>
                                <p className='text-[14px] text-description font-roboto leading-normal'>
                                    +8801609188941
                               </p>
                         </div>
                          

                       </div>

                    </div>

                    <div className=' mb-7.5 w-full group md:px-3 lg:w-1/3 ' data-aos="fade-up" data-aos-delay="400">
                        <div className='flex flex-row items-center '>
                           <div className='w-14 h-14 flex items-center justify-center shrink-0 border border-solid border-accent1 rounded-[50%] transition duration-300 group-hover:bg-accent1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent1 transition duration-300 group-hover:text-white">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                             </svg>

                           </div>
                          
                          
                           <div className='ms-3.75'>
                               <h4 className='text-[#777777] font-bold font-playfair mb-0.5 leading-[1.2] transition duration-300 text-[18px] group-hover:text-accent1'>
                                 Email
                                </h4>
                                <p className='text-[14px] text-description font-roboto leading-normal'>
                                  niranzanroy1@gmail.com
                               </p>
                         </div>
                          

                       </div>

                    </div>


               </div>
             </div>
        </div>
    </div>
  )
}

export default Contact