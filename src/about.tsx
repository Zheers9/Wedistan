import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Test from './Test.tsx' // ✅ Import Test
import Navbar from './Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <div className='fixed justify-start top-0 pt-5'>
      <Navbar  />
      </div>

    </>
  </StrictMode>,
)