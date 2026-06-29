import React from 'react'

const Portfolio = () => {
  return (
    <div className='py-15'>
        <div className='pb-15 text-center w-full mx-auto px-3 z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330'>
              <h2 className='text-[32px] font-light mb-3.75 text-[#777777] font-playfair leading-[1.2]'>Portfolio</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className='w-full mx-auto px-3 z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330'>
              <div className='flex flex-col flex-wrap   md:flex-row '>
                  <div className='bg-blue-700 mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 '>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-10 h-12 bg-accent">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                          </svg>

                      </div>

                  </div>
                  <div className=' bg-amber-400 mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 '>
                       section2
                  </div>
                  <div className='bg-amber-950 mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 '>
                       section3
                  </div>
                  <div className='bg-amber-950 mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 '>
                       section4
                  </div>
                  <div className='bg-amber-950 mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 '>
                       section5
                  </div>
                  <div className='bg-amber-950 mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 '>
                       section6
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Portfolio