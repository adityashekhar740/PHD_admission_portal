import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from "react-redux";
import FormCard from './FormCard';
function AC() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [forms, setforms] = useState([])

  useEffect(()=>{
     const fetch_data=async () => {
     try{
       const res=await axios.get(`/api/application/getCompletedForms/${currentUser._id}`);
       setforms(res.data);
       console.log(res);
     }
     catch(e){
      console.log(e);
     }
     }
     fetch_data();
  },[])
  return (
    <div>
      {
        forms?
        forms.length>0?
        <div>
         {
           forms.map((form)=>(
          <FormCard form={form} dashboard={true} AC={true} />
        ))
         }
        </div>
        :<h1 className='text-center' >CURRENTLY NO RESULTS TO SHOW...</h1>
        :<h1>
          Loading...
        </h1>
      }
    </div>
  )
}

export default AC