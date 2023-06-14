
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import RatingComponent from '../../../Shared/Ratings/RatingComponent';
import UsersComments from './UsersComments';


const Users = () => {

    const [user] = useAuthState(auth)
    const [rating, setRating] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();


        const name = e.target.name.value
        const email = e.target.email.value
        const review = e.target.review.value




        const reviewData = {
            name: name,
            email: email,
            review: review,
            rating: rating
        }


        fetch("https://bird-shop-server-two.vercel.app/reviews", {
            method: "POST",
            headers:
            {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)

        })



    }


    return (

        <div className='container ml-auto mr-auto p-20 mt-10 mb-10'>
            <article className='text-center'>


                

                <div className="card mx-auto p-8 w-full max-w-sm shadow-2xl bg-base-100">

                    <h2 className='text-2xl font-semibold text-center mt-10 mb-5'>You can give your review here</h2>

                    <RatingComponent rating={rating} setRating={setRating} defaultOnly={false}></RatingComponent>

                    <div className="card-body text-center">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control" >
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" value={user?.email} readOnly />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" value={user?.displayName} readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Review</span>
                                </label>
                                <textarea className="textarea textarea-bordered" name='review' placeholder="Your Review of our site" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' className="btn btn-primary" value='Submit Review' />
                            </div>
                        </form>

                    </div>
                </div>
            </article>


            <UsersComments></UsersComments>

        </div>
    );
};

export default Users;