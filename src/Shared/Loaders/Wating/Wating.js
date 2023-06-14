import React from 'react';
import Wait from '../../../Assets/13520-blue-bird-waiting.json'
import Lottie from 'lottie-react'


const Wating = () => (
    <div className="card max-w-screen">
        <figure className="px-10 pt-10">
        <Lottie animationData={Wait} loop={true} />
        </figure>
        
    </div>
);

export default Wating;
