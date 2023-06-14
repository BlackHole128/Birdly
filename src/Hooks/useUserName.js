import React, { useEffect, useState } from 'react';

const useUserName = () => {
    
    const [userNames , setUserNames] = useState([])
    

    useEffect(()=>
    {
        fetch('http://localhost:8000/graphql' , 
        {
            method : "POST",
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                query : `{
                    user {
                        name 
                    }

                }`
            })
        }).then(res => res.json()).then(data => setUserNames((data?.data?.user)))
    } , [])

    return [userNames , setUserNames]
};

export default useUserName;