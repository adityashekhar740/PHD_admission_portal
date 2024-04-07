import React, { useState } from "react";
import './AdminCss.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function AppnModal({ app, setModelOpen }) {
  const navigate=useNavigate();
  const handleClick=async(x,y)=>{
    try{
      const res=await axios.post(`/api/admin/setStatus/${y}`,{status:x});
    setModelOpen(false);
    navigate('/admin/AdminDashboard');
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    <>
      <div className="  modal absolute z-10 rounded-sm top-[12%] bg-[white]  left-[25%] h-[76%] w-[50%] flex flex-col gap-2 pl-5 overflow-scroll ">
        <div className="flex w-full h-full ">

          <div className="w-[99%] h-full ">
            <div className="flex justify-between text-[34px] pr-[14px] ">
              <span
                className="cursor-pointer"
                onClick={() => {
                  setModelOpen(false);
                  document.body.classList.toggle('modalOpen');
                }}
              >
                &times;
              </span>
              <span onClick={()=>{handleClick('pending',app._id)}} className="text-lg py-2 cursor-pointer " >📌Unpin</span>
            </div>
            <div className="mx-auto text-[18px] font-semibold ml-[30%] ">
              PHD APPLICATION FORM 2024{" "}
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-[3px] mt-2 ">
                <h1 className="ml-5 " > <span className="text-gray-700 font-semibold " >Application ID</span> : {app._id}</h1>
                <h1 className="ml-5" ><span className="text-gray-700 font-semibold " >Applicant Name</span> : {app.personalDetails.fullname}</h1>
              </div>
            </div>
            <div>
              <h1 className="font-semibold my-5 ">• PERSONAL DETAILS : </h1>
              <p><span className="text-gray-700 font-semibold ml-5 " >Fullname</span> : {app.personalDetails.title} {" "} {app.personalDetails.fullname}</p>
              <p><span className="text-gray-700 font-semibold ml-5 " >Email</span> : {app.personalDetails.email}</p>
              <p><span className="text-gray-700 font-semibold  ml-5" >Mobile</span> : {app.personalDetails.Mobile}</p>
              <p><span className="text-gray-700 font-semibold  ml-5" >Date Of Birth</span> : {app.personalDetails.dob}</p>
              <p><span className="text-gray-700 font-semibold  ml-5" >Discipline</span> : {app.personalDetails.discipline}</p>
              <p><span className="text-gray-700 font-semibold ml-5" >Program</span> : {app.personalDetails.program}</p>
              <p><span className="text-gray-700 font-semibold ml-5" >Stream</span> : {app.personalDetails.stream}</p>
            </div>
            <div>
              <h1 className="font-semibold my-5 ">• PARENTAL DETAILS : </h1>
              <p><span className="text-gray-700 font-semibold ml-5 " >Father's Name</span> : {app.parentDetails.Fname}</p>
              <p><span className="text-gray-700 font-semibold ml-5 " >Father's Mobile</span> : {app.parentDetails.Fmobile}</p>
              <p><span className="text-gray-700 font-semibold  ml-5" >Father's Email </span> : {app.parentDetails.Fmail}</p>
              <p><span className="text-gray-700 font-semibold  ml-5" >Mother's Name</span> : {app.parentDetails.Mname}</p>
              <p><span className="text-gray-700 font-semibold  ml-5" >Mother's Mobile</span> : {app.parentDetails.Mmobile}</p>
              <p><span className="text-gray-700 font-semibold ml-5" >Mother's Email</span> : {app.parentDetails.Mmail}</p>
            
      
            </div>
            <div>
              <h1 className="font-semibold my-5 ">• ADDRESS DETAILS : </h1>
              <p><span className="text-gray-700 font-semibold ml-5 " >Address</span> : {app.addressDetails.address}</p>
              <p><span className="text-gray-700 font-semibold ml-5 " >Permanent Address</span> : {app.parentDetails.isPermanentAddress}</p>
      
            </div>
            <div>
              <h1 className="font-semibold my-5 ">• DECLARATION  : </h1>
              <p><span className="text-gray-700 font-semibold ml-5 " >Declaration </span> : {app.declaration?"ACCEPTED":"DENIED"}</p>
              
      
            </div>
            <div className="flex gap-[1%] mt-4 w-full " >
              <button onClick={()=>{handleClick('accepted',app._id)}} className=" text-white w-[32%] py-[7px] rounded-sm bg-green-500 " >Approve</button>
              <button onClick={()=>{handleClick('MFR',app._id)}} className=" text-white w-[32%] py-[7px] rounded-sm bg-gray-500 " >Mark For Review</button>
              <button onClick={()=>{handleClick('rejected',app._id)}} className=" text-white w-[32%] py-[7px] rounded-sm bg-red-500 " >Reject</button>
            </div>
            
          </div>

          {/* <div className="bg-[#e45c37] w-[1%] h-full "></div> */}
        </div>
      </div>
      <div
        onClick={() => {
          setModelOpen(false);
                  document.body.classList.toggle('modalOpen');

        }}
        className="overlay absolute z-3 bg-black opacity-40 top-0 left-0 h-full w-full "
      ></div>
    </>
  );
}

export default AppnModal;
