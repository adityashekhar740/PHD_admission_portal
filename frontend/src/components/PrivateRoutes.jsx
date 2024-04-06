import React from 'react'
import {useSelector} from 'react-redux';
import {Navigate,Outlet} from 'react-router-dom';
function PrivateRoutes() {
    const {currentUser,loading,error}=useSelector((state)=>state.user);
  return (
    <>

    {
        currentUser?<Outlet/>:<Navigate to={'/signin'} />
    }   
    
    </> 
  )
}

export default PrivateRoutes