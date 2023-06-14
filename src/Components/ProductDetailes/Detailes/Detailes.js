import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Origin from './Origin';
import ProductCard from './ProductCard';
import "./Detailes.scss"
import UseProductDetailes from '../../../Hooks/UseProductDetailes';

const Detailes = () => 
{

    const {id} = useParams(); 
    

    const [products, setProducts] = UseProductDetailes()


    console.log(products);


    useEffect(()=>
    {
        const newProduct =  products.find(product=> product._id === id)
        setProducts(newProduct)
    } , [id , products.length])



    return (
        <div className='container ml-auto mr-auto mt-20 mb-10 p-20'>
            <h1 className='text-2xl font-bold mt-10 mb-10 text-center'>Birds Detailes</h1>

            <section className='text-center mt-10 mb-10'>
               
                    <ProductCard const detailes={products}></ProductCard>
                
            </section>



            <article className='mt-20 mb-10'>
                <h2 className='mb-10 mt-10 text-center text-2xl font-bold'>Bird's Origin</h2>
                <Origin></Origin>
            </article>

        </div>
    );
};

export default Detailes;