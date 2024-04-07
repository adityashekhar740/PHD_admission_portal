import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from "react-redux";
import FormCard from './FormCard';
function AIP() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [forms, setforms] = useState([])

  useEffect(()=>{
     const fetch_data=async () => {
     try{
       const res=await axios.get(`/api/application/getInProgressForms/${currentUser._id}`);
       setforms(res.data);
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
          <FormCard dashboard={true} AIP={true} />
        ))
         }
        </div>
        :<h1 className='text-center' >YOU HAVEN'T APPLIED ANYWHERE YET...</h1>
        :<h1>
          Loading...
        </h1>
      }
    </div>
  )
}

export default AIP