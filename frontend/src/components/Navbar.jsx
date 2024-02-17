import React from 'react'

function Navbar() {
  return (
    <div className='h-[59px] bg-[#fafbfc] px-4 flex justify-between shadow-lg ' >
        <div>
            <img src="../public/muj_logo.jpg" alt="" />
        </div>
        <div className='border-x-2 flex items-center font-semibold px-3 text-[18px] ' >
            Welcome user
        </div>
    </div>
  )
}

export default Navbar