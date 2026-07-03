import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'animate.css';
import 'aos/dist/aos.css';
import { LoadingProvider } from './context/LodingContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <LoadingProvider>
       <App />
    </LoadingProvider>
   
  </StrictMode>,
)
