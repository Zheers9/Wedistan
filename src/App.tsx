import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Navbar.tsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='absolute justify-start top-0 pt-5'>
        <Navbar  />
    </div>
    
      
    </>
  )
}

export default App
