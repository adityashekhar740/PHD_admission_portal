import React, { useEffect, useState } from 'react'
import bgimg from '../../assets/bgimg.jpg';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import { signinstart,signinsuccess,signinfailure } from '../../redux/User/UserSlice';

const AdminSignin = () => {
    const dispatch=useDispatch();
    const {currentUser,loading,error}=useSelector((state)=>state.user);
    const navigate=useNavigate();
     const [formData, setformData] = useState({
    email:'',
    password: '',
  })


    const handleSubmit=async(e)=>{
        e.preventDefault();
        dispatch(signinstart());
         try{
            const res=await axios.post('/api/admin/auth/signin',formData);
            dispatch(signinsuccess(res.data));

            navigate('/admin/AdminDashboard');
        }
        catch(e){
            console.log(e);
            dispatch(signinfailure(e));
        }
       }

        const handleChange=(e)=>{
      setformData({...formData,[e.target.id]: e.target.value})
    }
    
  return (
    <div className=' relative w-[100%] h-[100vh]' >
        
        <div className=' relative w-[100%] h-[100%] z-1 ' >
            <img className='h-[100%] w-[100%]  object-cover ' src={bgimg} alt="" />
        </div>

        <div className='left-[27%] w-[40%] p-[45px] absolute lg:w-[30%] rounded lg:left-[57%] top-[20%] bg-[#fff] z-[5] h-[60%] ' >
            <form onSubmit={(e)=>{handleSubmit(e)}} action="">
                <h1 className='font-semibold text-[27px] uppercase text-gray-800 ' >WELCOME ADMIN</h1>
                <h1>sign in</h1>
                <div className='flex flex-col gap-4 mt-10 ' >
                    <div>
                        <label htmlFor="email">Email</label>
                <br />
                <input onChange={(e)=>{handleChange(e)}} className=' outline-none w-[100%] px-2 py-1 border-b-[2px] border-[#d3632e] border-solid '  type="email" name="email" id="email" />
                    </div>
                <br />
                <div>
                    <label htmlFor="password">Password</label>
                <br />
                <input onChange={(e)=>{handleChange(e)}} className=' outline-none w-[100%] px-2 py-1 border-b-[2px] border-[#d3632e] border-solid ' type="password" name="password" id="password" />
                </div>
                <span className='text-sm text-gray-600 ' >Don't have an account? <Link to={'/register'} className='text-blue-700 font-semibold ' >Sign up</Link> </span>
                <div>
                    <button className=' mt-5 ml-[34%] w-[27%] bg-[#d3632e] px-3 py-[6px] rounded text-white ' >Sign in</button>
                </div>
                </div>
            </form>
        </div>
        <div className='overlay bg-[black] bg-opacity-50 w-[100%] h-[100%] absolute z-[1] top-0 left-0  ' ></div>
    </div>
  )
}

export default AdminSignin