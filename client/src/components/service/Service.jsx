import React from 'react'
import {Gauge, Layers3, Monitor, MonitorSmartphone, Palette, Server} from "lucide-react"

const Service = () => {
  return (
    <div className='py-15'>
        <div className='pb-15 text-center w-full mx-auto px-3 z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330' data-aos="fade-up">
              <h2 className='text-[32px] font-light mb-3.75 text-[#777777] font-playfair leading-[1.2]'>Services</h2>
              <p>What I Do</p>
        </div>
        <div className='w-full mx-auto px-3 z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330' data-aos="fade-up" data-aos-delay="100">
              <div className='flex flex-col flex-wrap   md:flex-row '>
                  <div className='mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 ' data-aos="fade-up" data-aos-delay="200">
                     <div className="flex group relative before:content-[''] before:absolute before:inset-0 ">
                       <div className='mr-5'>
                        

                          <Palette size={40} className='text-accent1'/>

                       </div>
                        <div>
                           <h4 className='text-[#777777] font-bold font-playfair mb-2.5 leading-[1.2] transition duration-300 text-[20px] group-hover:text-accent1'>
                              UI/UX Design
                           </h4>
                           <p className='text-[15px] text-[color-mix(in_srgb,var(--color-description),transparent_30%)] font-roboto'>
                              Designing intuitive and engaging user interfaces focused on usability, accessibility, and business goals.
                           </p>
                        </div>

                     </div>

                  </div>


                  <div className='mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 ' data-aos="fade-up" data-aos-delay="300">
                     <div className="flex group relative before:content-[''] before:absolute before:inset-0 ">
                       <div className='mr-5'>
                         
                           <MonitorSmartphone size={40} className='text-accent1'/>

                       </div>
                        <div>
                           <h4 className='text-[#777777] font-bold font-playfair mb-2.5 leading-[1.2] transition duration-300 text-[20px] group-hover:text-accent1'>
                              Design-to-Code
                           </h4>
                           <p className='text-[15px] text-[color-mix(in_srgb,var(--color-description),transparent_30%)] font-roboto'>
                             Transforming Figma designs into pixel-perfect, responsive, and production-ready websites.
                           </p>
                        </div>

                     </div>

                  </div>


                 

                  <div className='mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 ' data-aos="fade-up" data-aos-delay="400">
                     <div className="flex group relative before:content-[''] before:absolute before:inset-0 ">
                       <div className='mr-5 '>
                         <Monitor size={40} className='text-accent1'/>

                       </div>
                        <div>
                           <h4 className='text-[#777777] font-bold font-playfair mb-2.5 leading-[1.2] transition duration-300 text-[20px] group-hover:text-accent1'>
                              Frontend Development
                           </h4>
                           <p className='text-[15px] text-[color-mix(in_srgb,var(--color-description),transparent_30%)] font-roboto'>
                              Building responsive, accessible, and interactive web applications using modern frontend technologies.
                           </p>
                        </div>

                     </div>

                  </div>


                  <div className='mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 ' data-aos="fade-up" data-aos-delay="400">
                     <div className="flex group relative before:content-[''] before:absolute before:inset-0 ">
                       <div className='mr-5 '>
                         <Server size={40} className='text-accent1'/>

                       </div>
                        <div>
                           <h4 className='text-[#777777] font-bold font-playfair mb-2.5 leading-[1.2] transition duration-300 text-[20px] group-hover:text-accent1'>
                              Backend Development
                           </h4>
                           <p className='text-[15px] text-[color-mix(in_srgb,var(--color-description),transparent_30%)] font-roboto'>
                              Designing secure and scalable APIs, authentication systems, and database architectures.
                           </p>
                        </div>

                     </div>

                  </div>


                  <div className='mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 ' data-aos="fade-up" data-aos-delay="400">
                     <div className="flex group relative before:content-[''] before:absolute before:inset-0 ">
                       <div className='mr-5 '>
                         < Layers3 size={40} className='text-accent1'/>

                       </div>
                        <div>
                           <h4 className='text-[#777777] font-bold font-playfair mb-2.5 leading-[1.2] transition duration-300 text-[20px] group-hover:text-accent1'>
                              Full Stack Web Applications
                           </h4>
                           <p className='text-[15px] text-[color-mix(in_srgb,var(--color-description),transparent_30%)] font-roboto'>
                              Developing complete solutions from concept to deployment using the MERN stack.
                           </p>
                        </div>

                     </div>

                  </div>


                   <div className='mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 ' data-aos="fade-up" data-aos-delay="400">
                     <div className="flex group relative before:content-[''] before:absolute before:inset-0 ">
                       <div className='mr-5 '>
                         <Gauge size={40} className='text-accent1'/>

                       </div>
                        <div>
                           <h4 className='text-[#777777] font-bold font-playfair mb-2.5 leading-[1.2] transition duration-300 text-[20px] group-hover:text-accent1'>
                              Website Optimization
                           </h4>
                           <p className='text-[15px] text-[color-mix(in_srgb,var(--color-description),transparent_30%)] font-roboto'>
                              Improving performance, accessibility and overall user experience.
                           </p>
                        </div>

                     </div>

                  </div>

              </div>
        </div>
    </div>
  )
}

export default Service