
import React from 'react';
import { Rating } from 'primereact/rating'


const RatingComponent = (props) => 
{

    const {rating , setRating , defaultOnly} = props
    return (
        
        <Rating className='flex justify-center align-middle gap-2 text-warning' value={rating} onChange={(e)=> setRating(e.value)} readOnly={defaultOnly}></Rating>

    );
};

export default RatingComponent;