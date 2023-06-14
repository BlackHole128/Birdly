import React from 'react';
import pic from "../../../../Assets/pix2.jpg"

const ServiceTwo = () => {
    return (
        <div className='container mr-auto ml-auto p-40'>
            
            <h1 className=' mb-10 text-2xl font-semibold text-center'>Customer Care</h1>
            <article className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div className='my-auto p-10'>
                    <h2 className='text-xl font-semibold '>We have A Dedicated Team To Serve You Continueously.</h2>
                </div>
                <div className='max-w-screen'>
                    <img className='rounded-xl' src={pic} alt='pic2'/>
                </div>
            </article>
            
        </div>
    );
};

export default ServiceTwo;