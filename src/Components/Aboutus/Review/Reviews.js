import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../../Hooks/useReview';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <section className='container p-24 ml-auto mr-auto'>
            <h1 className='text-2xl font-bold text-center mt-10 mb-10' data-aos="fade-up">Our Customer's Reviews</h1>
            <article className='grid grid-cols-1 lg:grid-cols-3 gap-16' dat-aos='fade-up'>
                {reviews.map(review => <Review review={review} key={review._id}></Review>)}

            </article>
            <div className='text-center'>

                <Link to='/comments' className='btn mt-10 mb-5 ml'>More Reviews</Link>
            </div>
        </section>
    );
};

export default Reviews;