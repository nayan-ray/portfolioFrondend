import React from 'react'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='py-7.5 bg-[#f3f1f0] text-[#898989] text-[14px] font-roboto'>
       <div className='text-center'>
           <div>
               <a
                 href="https://github.com/nayan-ray"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition"
                >
                   <FaGithub size={24} />
                   <span>GitHub</span>
                 </a>
           </div>
        
           <div className='text-[16px] my-2 text-accent1'>
               Designed And Developed By <span>Nayan Kumar Ray</span>
           </div>

            <div className='text-[15px]'>
                © 2026 All Rights Reserved
            </div> 

       </div>
    </div>
  )
}

export default Footer