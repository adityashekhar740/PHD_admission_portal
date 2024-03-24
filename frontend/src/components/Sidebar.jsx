import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { IoIosChatboxes } from "react-icons/io";
import { SlQuestion } from "react-icons/sl";
import { RiLogoutBoxLine } from "react-icons/ri";
import { AiOutlineFileDone } from "react-icons/ai";


function Sidebar({admin}) {
  const  [active, setactive] = useState('Dashboard');
  return (
    admin?
    <div className=' flex flex-col h-[100%] w-[17%] bg-[#656565]  text-[white] ' >
        

        <NavLink onClick={()=>{setactive('AllApplicationForms')}} className={` h-[47px] flex gap-1 items-center  border-t-[0.2px]  p-2 ${active==='AllApplicationForms'?'bg-[#e45c37]':'bg-[#656565]'}  `} to={'/admin/Candidate-Applications'} >
            <AiOutlineFileDone/>
            Candidate Application Form(s)
        </NavLink>

        <NavLink onClick={()=>{setactive('Profile')}} className={` flex gap-1 items-center h-[47px] p-2  border-t-[0.2px]  ${active==='Profile'?'bg-[#e45c37]':'bg-[#656565]'}  `} to={'/profile'} >
            <CiUser />
            Profile
        </NavLink>
        <NavLink onClick={()=>{setactive('My Queries')}} className={` flex gap-1 items-center h-[47px]  border-t-[0.2px]  p-2 ${active==='My Queries'?'bg-[#e45c37]':'bg-[#656565]'}  `} to={'/queries'} >
            <IoIosChatboxes />
             Queries
        </NavLink>
        <NavLink onClick={()=>{setactive('FAQs')}} className={` flex gap-2 items-center h-[47px] p-2  border-t-[0.2px]  ${active==='FAQs'?'bg-[#e45c37]':'bg-[#656565]'}  `}to={'/FAQs'} >
            <SlQuestion />
            FAQs
        </NavLink>
        <NavLink onClick={()=>{setactive('Log Out')}} className={` flex gap-1 items-center h-[47px]  border-t-[1px]  p-2 ${active==='Log Out'?'bg-[#e45c37]':'bg-[#656565]'}  `} to={'/logout'} >
            <RiLogoutBoxLine />
            Log Out
        </NavLink>
    </div>
    :<div className=' flex flex-col h-[100%] w-[17%] bg-[#656565]  text-[white] ' >
        
        <NavLink onClick={()=>{setactive('Dashboard')}}  className={` h-[47px] p-2 border-t-[1px]  ${active==='Dashboard'?'bg-[#e45c37]':'bg-[#656565]'}  `} to={'/dashboard'} >
            Dashboard
        </NavLink>
        

        <NavLink onClick={()=>{setactive('AllApplicationForms')}} className={` h-[47px] flex gap-1 items-center  border-t-[0.2px]  p-2 ${active==='AllApplicationForms'?'bg-[#e45c37]':'bg-[#656565]'}  `} to={'/Applications'} >
            <AiOutlineFileDone/>
            All Application Form(s)
        </NavLink>

        <NavLink onClick={()=>{setactive('Profile')}} className={` flex gap-1 items-center h-[47px] p-2  border-t-[0.2px]  ${active==='Profile'?'bg-[#e45c37]':'bg-[#656565]'}  `} to={'/profile'} >
            <CiUser />
            Profile
        </NavLink>
        <NavLink onClick={()=>{setactive('My Queries')}} className={` flex gap-1 items-center h-[47px]  border-t-[0.2px]  p-2 ${active==='My Queries'?'bg-[#e45c37]':'bg-[#656565]'}  `} to={'/queries'} >
            <IoIosChatboxes />
            My Queries
        </NavLink>
        <NavLink onClick={()=>{setactive('FAQs')}} className={` flex gap-2 items-center h-[47px] p-2  border-t-[0.2px]  ${active==='FAQs'?'bg-[#e45c37]':'bg-[#656565]'}  `}to={'/FAQs'} >
            <SlQuestion />
            FAQs
        </NavLink>
        <NavLink onClick={()=>{setactive('Log Out')}} className={` flex gap-1 items-center h-[47px]  border-t-[1px]  p-2 ${active==='Log Out'?'bg-[#e45c37]':'bg-[#656565]'}  `} to={'/logout'} >
            <RiLogoutBoxLine />
            Log Out
        </NavLink>
    </div>
  )
}

export default Sidebar