import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import axios from 'axios';
function QR() {
  const [data,setData]=useState([]);
  const {currentUser}=useSelector((state) => state.user);
  useEffect(()=>{
    const fetch_data=async () => {
      try{
        const res=await axios.get(`/api/user/getRaisedQueries/${currentUser._id}`);
        setData(res.data);
      }
      catch(e){
        console.log(e);
      }
    }
    fetch_data();
  },[])
  return (
    <>
    {
      data.length>0?<div>
       {
        data.map((query)=>(
       <div className="h-[75px] w-full flex bg-white rounded-sm border items-center my-5  ">
          <div className="w-[4px] bg-[#e45c37] h-[100%]"></div>
          <div className="flex justify-between w-[90%] h-[100%]  items-center ">
            <div className='h-[100%] flex flex-col justify-center' >
              <h1 className="text-[#666666] text-sm font-semibold  ml-3  h-[25%]  ">
              Query: {query.queryDescription}
            </h1>
            </div>
            <div className="flex  h-[100%] ">
              <div className="flex items-center px-7  border-solid border-x-[0.1px] border-gray-300 ">
                <h1 className="text-[#666666] ">
                  {query.response!=='pending'? (
                    <span className=" font-semibold text-green-600 ">
                      1 Response Received...
                    </span>
                  ) : (
                    <span className=" font-semibold text-gray-600 ">
                      waiting for Response...
                    </span>
                  )
                  }
                </h1>
              </div>
              <div className="flex items-center px-7 border-solid border-x-[0.1px] border-gray-300  ">
                <div>
                  <button
                  // disabled={query.response==='pending'}
                    onClick={() => {
                      alert(`${query.response}`);
                    }}
                    className={`bg-[#65af41] disabled:opacity-85  text-[white] px-3 py-1 rounded-sm `}
                  >
                    View Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))
      }
      </div>:<h1>Loading...</h1>
    }
    
      
    </>
  )
}

export default QR