import React from 'react';
import ServiceOne from './ServiceOne';
import ServiceTwo from './ServiceTwo';

const Services = () => {
    return (
        <div className=' container mr-auto ml-auto'>
            <h1 className='text-center text-2xl font-semibold mt-24'>Our Services</h1>
            
            <ServiceOne></ServiceOne>
            <ServiceTwo></ServiceTwo>
            
        </div>
    );
};

export default Services;