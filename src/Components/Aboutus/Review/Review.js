import React from 'react';

const Review = (props) => 
{
    const { review } = props
    const { name , rating , comment } = review
    const ratingArray = [];

    const stopRating = <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
    const normalrating = <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    
    console.log(review);
    return (
        <div className="card max-w-screen max-h-screen shadow-xl">
            <div className="card-body items-center text-center">

            <div className="rating">
                <p>Ratings: {rating}/5</p>
            </div>
                
                <h2 className="text-xl font-semibold"> Customer's Name : {name}</h2>
                <p>{comment}</p>
                
            </div>
        </div>
    );
};

export default Review;