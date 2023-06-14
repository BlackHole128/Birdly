import Lottie from 'lottie-react'
import React from 'react';
import Paracute from "../../../../Assets/123814-ecommerce-parcel-box-delivery-by-parachute.json"

const ServiceOne = () => {
    return (
        <div className='container ml-auto mr-auto p-40 '>
            <h1 className=' mb-10 text-2xl font-semibold text-center'>Fast delivery</h1>
            <h2 className='text-xl font-semibold text-center mt-10 mb-10'>We commit Fastest Delivery on Town</h2>
            
                <div className=''>

                    <Lottie className='w-96 mx-auto' animationData={Paracute} loop={true} />
                </div>
                
            
        </div>
    );
};

export default ServiceOne;