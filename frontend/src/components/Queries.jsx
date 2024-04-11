import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateUserFailure, updateUserStart, updateUserSuccess } from '../redux/User/UserSlice';
import {useNavigate} from 'react-router-dom';
function Queries() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { currentUser, loading, error } = useSelector((state) => state.user);


  const [formData, setFormData] = useState({
    name: '',
    queryDescription: '',
    queryCategory: '',
    program: ''
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.post(`/api/user/raiseQuery/${currentUser._id}`,formData);
      console.log(res);
      alert('Query Raised 💬 ');
      navigate('/dashboard/Queries-raised');
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <div className="flex flex-col items-center bg-[#eaeaea] p-4 max-w-[83%]  ">
      <div>
        <h1 className="text-2xl font-normal ">Raise A Query</h1>
        <p className="leading-7 text-[14px]">
          After making the payment if the amount is debited from your account
          and payment status is showing pending then hit the Make payment button
          once again to get the status updated and if still Payment Status is
          showing pending then write to us on Any Queries? Ask US displayed on
          your dashboards.
        </p>
      </div>
      <div className="w-full bg-[#afadad] h-[1px] my-5 mb-7 "></div>
      <div className="mt-5 w-[40%] mx-auto " >
        <form onSubmit={(e)=>{handleSubmit(e)}} className=" flex flex-col gap-4 mx-auto   " action="">
          <div className="flex gap-3 w-[95%] justify-between " >
            <label htmlFor="name">Name: </label>
            <input className=" outline-none py-[6px] px-1 rounded-[3px] w-[85%]" type="text" name="name" id="name"  onChange={handleInputChange} />
          </div>
          <div className="flex gap-3 w-[95%] justify-between " >
            <label className="ml-[-10px]" htmlFor="queryDescription">Description: </label>
            <textarea className="outline-none" name="queryDescription" id="queryDescription" cols="54" rows="3"  onChange={handleInputChange}></textarea>
          </div>
          <div className="flex gap-3 w-[95%] justify-between " >
            <label htmlFor="queryCategory">Category: </label>
            <select className=" outline-none w-[92%] py-[6px] px-1 " name="queryCategory" id="queryCategory"  onChange={handleInputChange}>
              <option value="select">Select</option>
              <option value="Course Details">Course Details</option>
              <option value="Eligibility Criteria">Eligibility Criteria</option>
              <option value="Form Correction">Form Correction</option>
              <option value="Payment Issue">Payment Issue</option>
              <option value="Fee Details">Fee Details</option>
              <option value="Normal Query">Something else..</option>
            </select>
          </div>
          <div className="flex gap-3 w-[95%] justify-between " >
            <label htmlFor="program">Program: </label>
            <select className=" outline-none w-[92%] py-[6px] px-1 " name="program" id="program"  onChange={handleInputChange}>
              <option value="select">Select</option>
              <option value="BasicSciencesPrograms">BasicSciencesPrograms</option>
              <option value="CompApplicationsPrograms">CompApplicationsPrograms</option>
              <option value="EngineeringPrograms">EngineeringPrograms</option>
            </select>
          </div>
    <div className="mx-auto" >
      <button className="bg-[#e45c37] hover:opacity-90 py-2 px-3 text-white rounded-sm " >Raise Query</button>
    </div>
        </form>
      </div>

    </div>
  );
}

export default Queries;
