import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Test from './Test.tsx' // ✅ Import Test
import Navbar from './Navbar.tsx'
import MainBody from './MainBody.jsx'
import Down from './Down.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
        <App  />
        <MainBody />
        
    </>
  </StrictMode>,
)