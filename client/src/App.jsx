import ProgessRing from "./components/progessRing/ProgessRing"
import Home from "./pages/home/Home"
import ProductDetails from "./pages/productDetails/ProductDetails"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <>
    {/* <main>
      <ProgessRing />
      <Home /> 
      <ProductDetails />
    </main> */}


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
