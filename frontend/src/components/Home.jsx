import React, { useEffect, useRef } from 'react'
import Sidebar from './Sidebar'
import {useSelector} from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import {Navigate} from 'react-router-dom';

function Home() {
    const {currentUser,loading,error}=useSelector((state)=>state.user);
  const navigate=useNavigate();
 
  return (
   <>
   {currentUser?
    <Navbar/>:null
   }
    <div className='flex h-[100vh] w-[100%] z-1 ' >
        <Sidebar  />
        <Outlet/>
    </div>

   </>
  )
}

export default Home