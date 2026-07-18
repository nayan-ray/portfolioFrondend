import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Goal from '../../components/goal/Goal'
import Footer from '../../components/footer/Footer'
import ProjectInfo from '../../components/projectInfo/ProjectInfo'
import DetailsHeader from '../../components/detailsHeader/DetailsHeader'
import ProgessRing from '../../components/progessRing/ProgessRing'

import { useParams } from 'react-router-dom';
import { useLoading } from '../../context/LodingContext'
import { getProduct } from '../../components/api/apiCall'

const ProductDetails = () => {

   const [updatedScrollY, setUpdatedScrollY] = useState(0);
   const [showHeaderBackground, setShowHeaderBackground] = useState(false);

   const [product, setProduct] = useState(null);
   const { setLoading, loading } = useLoading();
   const { id } = useParams();

   useEffect(() => {

    async function fetchProduct() {

        try{

            setLoading(true);

            const res = await getProduct(id);

            setProduct(res?.data?.payload[0]);
           
        }
        catch(error){
            console.log(error);
        }
        finally{
            setLoading(false);
        }

    }

    fetchProduct();

}, [id]);










    //useEffect to scroll to top when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  
    useEffect(()=>{
  
        const handleScroll = () => {
           const scrollY = window.scrollY;
           const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
           const scrollPercentage = (scrollY / documentHeight) * 100;
           setUpdatedScrollY(scrollPercentage);

            if (scrollY > 50) {
              setShowHeaderBackground(true);
            } else {
              setShowHeaderBackground(false);
            }

        }
  
        window.addEventListener('scroll', handleScroll);
  
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
  
  
    },[])

  return (
    <div>
        {/* <Header /> */}
       
        {loading ? (
            <div className="fixed top-0 left-0 w-full h-full z-500 flex items-center justify-center bg-white">
                <span className="loading loading-bars loading-xl"></span>
           </div>
        ): (
            <>
               <ProgessRing updatedScrollY={updatedScrollY} />
               <DetailsHeader showBackground={showHeaderBackground} />
               <Goal product={product} />
               <ProjectInfo product={product} />
               <Footer />
            </>
         
        )}
        

      
    </div>
  )
}

export default ProductDetails