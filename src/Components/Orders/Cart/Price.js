import React from 'react';

const Price = (props) => {
    const { price } = props;
    return (
        <div >
            
            <h2 className='text-xl font-semibold text-center mb-5'>Price</h2>
            <button className="btn btn-outline btn-accent">{price}</button>
        </div>
    );
};

export default Price;