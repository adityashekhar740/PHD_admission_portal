import React from 'react'
import mujLogo from '../assets/muj_logo.jpg'


function Navbar() {
  return (
    <div className='h-[59px] bg-[#fafbfc] px-4 flex justify-between shadow-lg ' >
        <div>
            <img src={mujLogo} alt="" />
        </div>
        <div className='border-x-2 flex items-center font-semibold px-3 text-[18px] ' >
            Welcome user
        </div>
    </div>
  )
}

export default Navbar