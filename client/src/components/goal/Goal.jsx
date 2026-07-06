import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Goal = ({ product }) => {
   const navigate = useNavigate();

    const handleBack = () => {
        navigate("/", {
            state: {
                scrollTo: "portfolio",
            },
        });
      
    };

  return (
    <div className='text-white bg-background py-40'>
        <div className='w-full mx-auto px-3 z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330 text-center'>
            <div>

                <Link to="/" state={{backFrom : "details"}}>
                   <button className='flex items-center gap-2.5 text-[20px] mb-4 bg-accent1 px-5 py-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                      </svg>
                       Back
                  </button>
                
                </Link>


               
            </div>
            <h1 className='text-[30px] sm:text-[42px] font-bold font-playfair mt-8 mb-2.5'>Goal Of The Product</h1>
            <p className='font-roboto'>{product?.goal}</p>
        </div>
    </div>
  )
}

export default Goal