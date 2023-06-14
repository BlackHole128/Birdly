import React from 'react';
import Parrot from '../../../Assets/parrot2.json'
import Lottie from 'lottie-react'


const BirdsLoading = () => (
    <div className="card max-w-screen">
        <figure className="px-10 pt-10">
        <Lottie animationData={Parrot} loop={true} />
        </figure>
        
    </div>
);

export default BirdsLoading;
