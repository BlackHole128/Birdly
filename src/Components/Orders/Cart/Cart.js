import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import CartItems from './CartItems';


import "./Cart.scss"
import Cartitem from './Cartitem';

const Cart = () => {

    const [user] = useAuthState(auth);

    const userName = user?.displayName

    const url = `https://bird-shop-server-two.vercel.app/cart/${user?.email}`

    const { data: cartData = [] } = useQuery({
        queryKey: ['cartData'],
        queryFn: () => fetch(url).then(res => res.json())

    })


    console.log(cartData);

    return (
        <section className='container'>
            <article>
                    <div className="card max-w-screen p-10 shadow-xl">
                        <div className="card-body">
                            <h2 className='text-2xl text-center font-semibold mb-20'>{userName}'s - Cart</h2>
                           
                           <article className=''>
                                <div className=''>
                                    {cartData.map(cartData => <Cartitem key = {cartData?._id} cartitem = {cartData}></Cartitem>)}
                                </div>
                                <div></div>
                           </article>
                        </div>
                        <button className='btn'>Place Order</button>
                    </div>
            </article>

        </section>
    );
};

export default Cart;