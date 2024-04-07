import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

function Admin_home() {
  if(window.location.path==='/admin'){
    window.location.path='/admin/AdminDashboard';
  }
  return (
    <>
    <Navbar/>
    <div className='flex h-[100vh] w-[100%] z-1 ' >
        <Sidebar admin={true} />
        <Outlet/>
    </div>
    </>
  )
}

export default Admin_home