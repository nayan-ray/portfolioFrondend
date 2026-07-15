import React, { use, useEffect, useState } from 'react'
import product1 from "../../assets/product-1.jpg"
import { Link } from 'react-router-dom'

import { useLoading } from '../../context/LodingContext';
import { getPortfolio } from '../api/apiCall';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);


const { setLoading, loading } = useLoading();


const items = [
    { id: 0, name: 'All' },
    // { id: 1, name: 'Figma_Design' },
    { id: 2, name: 'Frond-End_Design' },
    { id: 4, name: 'Full-Stack_Development' },
];

useEffect(() => {

    async function fetchPortfolio() {

        try {

            setLoading(true);

            const res = await getPortfolio();

            // API may wrap the array inside `data` (e.g. { data: [...] })
            // prefer the inner array when present
            setPortfolio(res?.data?.payload);
            

        }
        catch(error){
            console.log(error);
        }
        finally{
            setLoading(false);
        }

    }

    fetchPortfolio();

}, []);

useEffect(() => {
   if(activeIndex === 0){
    setSelectedPortfolio(portfolio);
    return;
   }
   
   const selectedItem = portfolio.filter(item => item.category === activeIndex);
   setSelectedPortfolio(selectedItem);

}, [portfolio, activeIndex]);

  return (
    <div className='py-15'>
        <div className='pb-15 text-center w-full mx-auto px-3 z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330' data-aos="fade-up">
              <h2 className='text-[32px] font-light mb-3.75 text-[#777777] font-playfair leading-[1.2]'>Portfolio</h2>
              <p>Projects I've Designed & Developed</p>
        </div>
        <div className='w-full mx-auto px-3 z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330' data-aos="fade-up" data-aos-delay="100">
              
              <ul className='mb-5 text-center flex items-center justify-center gap-2.5 sm:gap-5 flex-wrap font-roboto'>

                {items.map((item, index) => (
                  <li key={index} className={`cursor-pointer inline-block text-[14px] sm:text-[18px] font-medium leading-none transition duration-300 hover:text-accent1 ${activeIndex === index ? 'text-accent1' : ''}`} onClick={() => setActiveIndex(index)}>
                    {item.name}
                  </li>
                ))}
                  {/* <li className='cursor-pointer inline-block text-[14px] sm:text-[18px] font-medium leading-none transition duration-300 hover:text-accent1'>All</li>
                  <li className='cursor-pointer inline-block text-[14px] sm:text-[18px] font-medium leading-none transition duration-300 hover:text-accent1'>Figma_Design</li>
                  <li className='cursor-pointer inline-block text-[14px]  sm:text[18px]  font-medium leading-none transition duration-300 hover:text-accent1'>Frond-End_Design</li>
                  <li className='cursor-pointer inline-block text-[14px]  sm:text[18px]  font-medium leading-none transition duration-300 hover:text-accent1'>Back-End_API</li>
                  <li className='cursor-pointer inline-block text-[14px]  sm:text[18px]  font-medium leading-none transition duration-300 hover:text-accent1'>Full-Stack_Development</li> */}
              </ul>


              <div className='flex flex-col flex-wrap   md:flex-row '>

                 
               {   loading && (
                     <div>
                      hello
                    </div>
                  )
                }

                 
                 
                 {selectedPortfolio.length === 0 && loading === false ?

                  (
                    <p className='text-center w-full text-accent1'>
                       The projects will be uploaded very soon. Please wait a while...
                    </p>
                  ) :
                  
                  (
                  
                    selectedPortfolio && selectedPortfolio.map((item, index)=>{
                    return (
                        <div key={index} className='mb-7.5 md:w-1/2 md:px-3 lg:w-1/3 ' data-aos="fade-up" data-aos-delay={200 + index * 100}>
                          <div className='relative truncate group'>
                               <img className='w-full object-cover transition duration-300 group-hover:scale-[1.1]'  src={item.productImg} alt="product1" />
                               <div className='absolute inset-0  bg-layer flex flex-col transition duration-300  opacity-0 group-hover:opacity-100'>
                               <h4 className='text-[14px] p-4 inline-block bg-accent1 font-playfair font-normal text-white'>{item.productName}</h4>
                             
                              <Link to={"/portfolio/" + item._id}>
                                <button className=' self-center justify-self-center flex items-center gap-2.5 mt-8.5 text-[16px] bg-accent1 py-3 px-5 rounded-[5px] text-white cursor-pointer'>
                                  Show Details
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                   </svg>
                               </button>
                       
                            </Link>
                          </div>
                       </div>

                    </div>
                    )
                 })

                  )}

            </div>
        </div>
    </div>
  )
}

export default Portfolio