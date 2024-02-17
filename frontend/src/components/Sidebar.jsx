import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const  [active, setactive] = useState('Dashboard');
  return (
    <div className=' flex flex-col h-[100%] w-[17%] bg-[#656565]  text-[white] ' >
        
        <NavLink onClick={()=>{setactive('Dashboard')}}  className={` h-[47px] p-2 border-t-[1px]  ${active==='Dashboard'?'bg-[#e45c37]':'bg-[#656565]'}  `} to={'/dashboard'} >
            Dashboard
        </NavLink>
        


        <NavLink onClick={()=>{setactive('Profile')}} className={` h-[47px] p-2  border-t-[0.2px]  ${active==='Profile'?'bg-[#e45c37]':'bg-[#656565]'}  `} to={'/profile'} >
            Profile
        </NavLink>
        <NavLink onClick={()=>{setactive('My Queries')}} className={` h-[47px]  border-t-[0.2px]  p-2 ${active==='My Queries'?'bg-[#e45c37]':'bg-[#656565]'}  `} to={'/queries'} >
            My Queries
        </NavLink>
        <NavLink onClick={()=>{setactive('FAQs')}} className={` h-[47px] p-2  border-t-[0.2px]  ${active==='FAQs'?'bg-[#e45c37]':'bg-[#656565]'}  `}to={'/FAQs'} >
            FAQs
        </NavLink>
        <NavLink onClick={()=>{setactive('Coming soon')}} className={` h-[47px]  border-t-[0.2px]  p-2 ${active==='Coming soon'?'bg-[#e45c37]':'bg-[#656565]'}  `} to={'/comingSoon'} >
            Coming soon
        </NavLink>
        <NavLink onClick={()=>{setactive('Log Out')}} className={` h-[47px]  border-t-[1px]  p-2 ${active==='Log Out'?'bg-[#e45c37]':'bg-[#656565]'}  `} to={'/logout'} >
            Log Out
        </NavLink>
    </div>
  )
}

export default Sidebar