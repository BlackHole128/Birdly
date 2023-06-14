import React, { useState } from 'react';
import RatingComponent from '../../../Shared/Ratings/RatingComponent';
import CartItems from './CartItems';
import Price from './Price';
const Cartitem = (props) => {
    const { cartitem } = props


    const [count, setCount] = useState(0)

    const addQuantity = () => {
        const newCount = count + 1
        setCount(newCount);
    }


    const removeQantity = () => {
        const newCount = count - 1
        setCount(newCount)
    }


    const NewPrice = parseInt(cartitem?.price) * count;

    // console.log(cartitem);

    return (
        <section className='cartItem'>
            <div className='productsContainer my-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={cartitem?.img} alt='' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name : {cartitem?.name}</h2>
                        <p>price : {cartitem?.price}</p>

                        <RatingComponent></RatingComponent>
                    </div>
                </div>
            </div>
            <div>
                <CartItems inc={addQuantity} dec={removeQantity} count={count}></CartItems>
            </div>
            <div>
                <Price price={NewPrice}></Price>
            </div>
        </section>
    );
};

export default Cartitem;