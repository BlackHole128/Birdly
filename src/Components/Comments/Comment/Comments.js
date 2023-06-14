import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import pix6 from "../../../Assets/pix6.jpg"
import Users from '../User\'s/Users';
const Comments = () => {


    const [myReview, setMyReview] = useState(false)
    const [allReview, setAllReview] = useState(false)


    const navigate = useNavigate();

    let myReviewClass = 'btn '
    let allReviewClass = 'btn '

    const HandleMyReview = () => {
        setAllReview(false)
        setMyReview(true)

        navigate('userReviews')


    }


    const handleAllReview = () => {
        setAllReview(true)
        setMyReview(false)


        navigate('allReviews')


    }


    if (myReview) {
        myReviewClass += 'btn-active';
    }

    if (allReview) {
        allReviewClass += 'btn-active'
    }


    return (


        <section>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${pix6})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Our customer's Reviews</h1>

                    </div>
                </div>
            </div>


            <article className='mt-20 mb-10 container p-20 ml-auto mr-auto mx-auto'>

                <div className='mt-5 mb-5'>


                    <article className='text-center'>
                        <div className="btn-group">

                            <button  onClick={handleAllReview} className={allReviewClass}>All Reviews</button>
                            <button  onClick={HandleMyReview} className={myReviewClass} >My Reviews</button>


                        </div>

                        <Outlet></Outlet>
                    </article>




                </div>




            </article>


        </section>
    );
};

export default Comments;