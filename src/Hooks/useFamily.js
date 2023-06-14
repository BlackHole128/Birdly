import React, { useEffect, useState } from 'react';

const useFamily = () => 
{
    
  const [family , setFamily] = useState([])

  useEffect(()=>{
    fetch("https://bird-shop-server-two.vercel.app/family").then(res=>res.json()).then(data => setFamily(data))
  } , [])


  return([family,setFamily])
};

export default useFamily;