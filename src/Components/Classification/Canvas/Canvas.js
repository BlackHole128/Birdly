import React from 'react';

const Canvas = (props) => 
{

    const { image } = props
    return (
        <div className=''>
            <img src={image} alt=''></img>
        </div>
    );
};

export default Canvas;