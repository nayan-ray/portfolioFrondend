import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Goal from '../../components/goal/Goal'
import Footer from '../../components/footer/Footer'
import ProjectInfo from '../../components/projectInfo/ProjectInfo'
import DetailsHeader from '../../components/detailsHeader/DetailsHeader'
import ProgessRing from '../../components/progessRing/ProgessRing'

const ProductDetails = () => {

    const [updatedScrollY, setUpdatedScrollY] = useState(0);
  
  
    useEffect(()=>{
  
        const handleScroll = () => {
           const scrollY = window.scrollY;
           const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
           const scrollPercentage = (scrollY / documentHeight) * 100;
           setUpdatedScrollY(scrollPercentage);
  
        }
  
        window.addEventListener('scroll', handleScroll);
  
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
  
  
    },[])

  return (
    <div>
        {/* <Header /> */}
        <ProgessRing updatedScrollY={updatedScrollY} />
        <DetailsHeader />
        <Goal />
        <ProjectInfo />

        <Footer />
    </div>
  )
}

export default ProductDetails