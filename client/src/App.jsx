import { useEffect } from "react";
import ProgessRing from "./components/progessRing/ProgessRing"
import Home from "./pages/home/Home"
import ProductDetails from "./pages/productDetails/ProductDetails"
import AOS from "aos";

import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  

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
