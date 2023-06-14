import React, { useState } from 'react';
import Cartitem from './Cartitem';

const CartItems = (props) => {



    const { inc, dec, count } = props;


    let btnClass = 'btn btn-outline mr-2'

    if (count === 0) {
        btnClass = 'btn btn-outline btn-disabled mr-2'
    }
    return (
        <section>
            <h2 className='text-xl font-semibold text-center mb-5'>Quantity</h2>
            <article className='flex items-center justify-evenly'>


                <div>
                    <button className={btnClass} onClick={dec}>-</button></div>
                <div>
                    <input type="text" placeholder="Type here" value={count} className="input input-bordered input-md w-full max-w-xs" /></div>
                <div>
                    <button className='btn btn-outline ml-2' onClick={inc}>+</button>
                </div>



            </article>
        </section>

    );
};

export default CartItems;