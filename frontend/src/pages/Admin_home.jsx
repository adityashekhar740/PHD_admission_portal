import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function Admin_home() {
  return (
    <>
    <Navbar/>
    <div className='flex h-[100vh] w-[100%] ' >
        <Sidebar admin={true} />
        <Outlet/>
    </div>
    </>
  )
}

export default Admin_home