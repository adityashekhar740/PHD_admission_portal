import React from 'react'
import mujLogo from '../assets/muj_logo.jpg'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {signOutStart,signOutSuccess,signOutFailure} from '../redux/User/UserSlice';
function Navbar({fileRef}) {

   const {currentUser,loading,error}=useSelector((state)=>state.user);
   const navigate=useNavigate();
   const dispatch=useDispatch();  
    const handleLogOut=async()=>{
      dispatch(signOutStart());
        try{
            if(currentUser.name){
              const res=await axios.get('/api/admin/auth/logout');
          dispatch(signOutSuccess());
            navigate('/admin-signin');
            }
            else{
              const res=await axios.get('/api/auth/logout');
          dispatch(signOutSuccess());
            navigate('/signin');
            }
            
        }
        catch(e){
            console.log(e);
          dispatch(signOutFailure(e));
        }
      }

  return (
    <div className='h-[59px] bg-[#fafbfc] px-4 flex justify-between shadow-lg z-1 ' >
      
        <div>
            <img src={mujLogo} alt="" />
        </div>
        <div className='flex gap-5' >
          <button onClick={()=>{
            handleLogOut()
          }} className='text-blue-600  hover:underline' >Log Out</button>
        <div onClick={(e)=>{handleClick(e)}} className=' cursor-pointer border-x-2 flex items-center font-semibold px-3 text-[18px] ' >
          
            Welcome {currentUser.username?currentUser.username:currentUser.name}
        </div>
        </div>
    </div>
  )
}

export default Navbar