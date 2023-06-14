import React, { useEffect, useState } from 'react';

const UseProductDetailes = (id) => {
    const [products , setProducts] = useState([])

    const [productDetailes , setProductDetailes] = useState({})

    useEffect(()=>
    {
        fetch('http://localhost:8000/graphql' , 
        {
            method : "POST",
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                query : `{
                    products {
                        _id
                        name 
                        image
                        scientificName
                    }

                }`
            })
        }).then(res => res.json()).then(data => setProducts(data?.data?.products))
    } , [])


    
    return [products , setProducts]
};

export default UseProductDetailes;


