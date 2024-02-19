import React from "react";
import {NavLink} from 'react-router-dom'

function Applications() {
  return (
    <div className="bg-[#eaeaea] p-4 max-w-[83%] ">
      <div>
        <h1 className="text-2xl font-normal ">All Application Form(s)</h1>
        <p className="leading-7 text-[14px]">
          After making the payment if the amount is debited from your account
          and payment status is showing pending then hit the Make payment button
          once again to get the status updated and if still Payment Status is
          showing pending then write to us on Any Queries? Ask US displayed on
          your dashboards.
        </p>
      </div>
      <div className="w-full bg-[#afadad] h-[1px] my-6 "></div>
      <div className="mt-5" >
        
        <p className="text-[#e45c37] text-lg my-6 " >Application Forms</p>
        <div className="h-[75px] w-full flex bg-white rounded-sm border items-center   " >
          <div className="w-[4px] bg-[#e45c37] h-[100%]" ></div>
            <div className="flex justify-between w-[90%] h-[100%]  items-center " >
              <h1 className="text-[#666666] font-semibold  ml-3  h-[25%]  " >PHD Application Form February 2024</h1>
            <div className="flex  h-[100%] " >
              <div className="flex items-center px-7 border-solid border-x-[0.1px] border-gray-300 " >
                <h1 className="text-[#666666] " >
                 Fees:<span className=" font-semibold text-red-500 " > ₹1000</span>
              </h1>
              </div>
              <div className="flex items-center px-7 border-solid border-x-[0.1px] border-gray-300  " >
                <NavLink to={'/Applications/apply'} className={`bg-[#65af41] text-[white] px-3 py-1 rounded-sm `} >
                Apply Now
              </NavLink>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Applications;
