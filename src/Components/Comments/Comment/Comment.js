import React from 'react';
import RatingComponent from '../../../Shared/Ratings/RatingComponent';

const Comment = (props) => 
{
    const { reviewData } = props;


    const {name , review , rating} = reviewData

    return (
        <div className="card max-w-screen max-h-screen shadow-xl">
            <div className="card-body items-center text-center">

            <div className="rating">
                <RatingComponent rating = {rating} defaultOnly={true}></RatingComponent>
            </div>
            <p className='text-xl font-thin'>Rating : {rating}/5</p>
                
                <h2 className="text-xl font-semibold"> Customer's Name : {name} </h2>
                <p>{review}</p>
                
            </div>
        </div>
    );
};

export default Comment;