import React, { useEffect } from 'react'
import axios from 'axios';
import AppnCard from '../../components/AdminComponents/AppnCard';
function AdminQueries() {
    const [data, setData] = React.useState([]);
    useEffect(()=>{
        const fetch_data=async()=>{
            try{
            const res=await axios.get('/api/admin/allQueries');
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
    <div className='p-5 pt-10 w-[89%] ' >
        <h1 className='text-center text-2xl ' >All Queries</h1>
        <div className='bg-[#656565] my-6 h-[1px] w-full ' ></div>
        <div>
            {
                data.length>0?
                <div>
                    {
                        data.map((Query)=>(
                            <AppnCard Query={Query} QR={true} />
                        ))
                    }
                </div>
                : <h1 className='text-center' >Loading...</h1>
            }
        </div>
    </div>
    </>
  )
}

export default AdminQueries