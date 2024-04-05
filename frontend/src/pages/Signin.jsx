import React, { useEffect, useState } from 'react'
import bgimg from '../assets/bgimg.jpg';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
    const navigate=useNavigate();
     const [formData, setformData] = useState({
    username:'',
    password: '',
  })



    const handleSubmit=async(e)=>{
        e.preventDefault();
         try{
            const res=await axios.post('/api/auth/signin',formData);
            console.log(res);
            navigate('/dashboard');
        }
        catch(e){
            console.log(e);
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
                <h1 className='font-semibold text-[27px] uppercase text-gray-800 ' >Sign in</h1>
                <div className='flex flex-col gap-4 mt-10 ' >
                    <div>
                        <label htmlFor="username">Username</label>
                <br />
                <input onChange={(e)=>{handleChange(e)}} className='w-[100%] px-2 py-1 border-b-[2px] border-[#d3632e] border-solid '  type="text" name="username" id="username" />
                    </div>
                <br />
                <div>
                    <label htmlFor="password">Password</label>
                <br />
                <input onChange={(e)=>{handleChange(e)}} className='w-[100%] px-2 py-1 border-b-[2px] border-[#d3632e] border-solid ' type="password" name="password" id="password" />
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

export default Signin