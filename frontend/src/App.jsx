import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App  () {
  const  [data, setData] = useState(null)
  useEffect(()=>{
const data=async()=>{
  try{
    const response=await axios.get('/api/test/testdata');
  setData(response.data)
  }
  catch(e){
    console.log(e)
  }
}
data();
},[data])

  return (
    <div>{data && data}</div>
  )
}

export default  App;