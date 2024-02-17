import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Home() {
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