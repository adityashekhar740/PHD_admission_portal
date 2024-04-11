import axios  from "axios";
import React, { useState } from "react";
import {useSelector,useDispatch} from 'react-redux';
import {updateUserFailure,updateUserStart,updateUserSuccess} from '../redux/User/UserSlice';
function Profile() {
  const dispatch=useDispatch();
  const {currentUser,loading,error}=useSelector((state)=>state.user);
  const [formData, setFormData] = useState({
    username: `${currentUser.username}`,
    email: `${currentUser.email}`,
  });


  const handleChange = (e) => {
   
    const { name } = e.target;
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch(updateUserStart());
    try{
      const res=await axios.post(`api/user/updateUser/${currentUser._id}`,formData);
      dispatch(updateUserSuccess(res.data));
      alert('PROFILE UPDATED SUCCESSFULLY');
      window.location.reload();
    }
    catch(e){
      dispatch(updateUserFailure(e));
      console.log(e);
    }
    
  };
  return (
    <div className="flex flex-col items-center bg-[#eaeaea] p-4 max-w-[83%]  ">
      <div>
        <h1 className="text-2xl font-normal ">My Profile</h1>
        <p className="leading-7 text-[14px]">
          After making the payment if the amount is debited from your account
          and payment status is showing pending then hit the Make payment button
          once again to get the status updated and if still Payment Status is
          showing pending then write to us on Any Queries? Ask US displayed on
          your dashboards.
        </p>
      </div>
      <div className="w-full bg-[#afadad] h-[1px] my-5 mb-7 "></div>
      <form  className="w-full max-w-2xl min-h-[450px] ">
        <div className="mb-4 flex items-center  ">
          <label htmlFor="name" className="   mr-4 w-[160px] flex justify-end ">
            Candidate's Name
          </label>
          <input
          defaultValue={currentUser.username}
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-[400px] px-3 py-2 border rounded-md outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="email" className="mr-4 flex justify-end w-[160px] ">
            Candidate's Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={currentUser.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-[400px] px-3 py-2 border rounded-md outline-none focus:border-blue-500"
          />
        </div>
        
        {/* <div className="mb-4 flex items-center">
          <label
            htmlFor="phoneNumber"
            className="mr-4 flex justify-end w-[160px] "
          >
            Candidate's Phone Number
          </label>
          <input
          defaultValue={currentUser.}
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-[400px] px-3 py-2 border rounded-md outline-none focus:border-blue-500"
          />
        </div> */}
        {/* <div className="mb-4 flex items-center">
          <label
            htmlFor="phoneNumber"
            className="mr-4 flex justify-end w-[160px] "
          >
            Alternate Moblie
          </label>
          <input
            type="number"
            id="alternateNumber"
            name="alternateNumber"
           
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-[400px] px-3 py-2 border rounded-md outline-none focus:border-blue-500"
          />
        </div> */}
        {/* <div className="mb-4 flex items-center">
          <label htmlFor="state" className="mr-4 flex justify-end w-[160px] ">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter your state"
            className="w-[400px] px-3 py-2 border rounded-md outline-none focus:border-blue-500"
          />
        </div> */}
        {/* <div className="mb-4 flex items-center">
          <label htmlFor="city" className="mr-4 flex justify-end w-[160px] ">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            className="w-[400px] px-3 py-2 border rounded-md outline-none focus:border-blue-500"
          />
        </div> */}
        <div className="mb-4 flex items-center pl-[175px] gap-4 mt-5 ">
          <button
          onClick={(e)=>{handleSubmit(e)}}
            type="submit"
            className="bg-[#e45c37] text-[13px] text-white font-semibold px-4 py-2 rounded-md hover:opacity-85"
          >
            Save & Continue
          </button>
          <button
            type="submit"
            className="bg-[#f0f0f0] border-solid border-[0.1px] border-gray-400 text-[13px]  text-black font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
