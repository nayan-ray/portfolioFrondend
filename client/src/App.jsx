import { useEffect } from "react";
import ProgessRing from "./components/progessRing/ProgessRing"
import Home from "./pages/home/Home"
import ProductDetails from "./pages/productDetails/ProductDetails"
import AOS from "aos";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import {useLoading} from "./context/LodingContext"


function App() {
  const { loading } = useLoading();

  useEffect(() => {
  
      AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: true,
          mirror: false,
          offset: 100,
      });
  
  }, []);
 

  return (
    <>
    {/* <main>
      <ProgessRing />
      <Home /> 
      <ProductDetails />
    </main> */}

{/* { loading ? (
  <div className="fixed top-0 left-0 w-full h-full z-500 flex items-center justify-center bg-white">
    <span className="loading loading-bars loading-xl"></span>
  </div>
) 
  : null} */}

 <BrowserRouter>
      <Routes>
          
        
           <Route path="/" element={<Home />} />

          <Route
            path="/portfolio/:id"
            element={<ProductDetails />}
          />
      
       
      </Routes>
    </BrowserRouter>
  


   
  </>
  )
}

export default App
