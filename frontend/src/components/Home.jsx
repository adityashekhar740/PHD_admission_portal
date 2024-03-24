import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

function Home() {
  const navigate=useNavigate();
 
  return (
   <>
   <Navbar/>
    <div className='flex h-[100vh] w-[100%] ' >
        <Sidebar/>
        <Outlet/>
    </div>

   </>
  )
}

export default Home