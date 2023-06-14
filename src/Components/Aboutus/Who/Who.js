import React from 'react';
import pix5 from "../../../Assets/pix5.jpg"

const Who = () => {
    return (
        <section className='container ml-auto mr-auto p-16 mt-20 mb-10'>
            <h1 className='text-3xl font-semibold mt-10 mb-5 text-center' data-aos="fade-up">Who really are we </h1>
            <article className='grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10' data-aos="fade-up">
                <div>
                    <img className='w-full rounded-lg' src="https://cdn.pixabay.com/photo/2020/06/29/00/03/parrots-5350976_960_720.jpg" alt=''></img>
                </div>
                <div className='my-auto'>
                    <p className='text-2xl '>We are a small e-commerce who sells some exotic pet birds to who loves beauty of nature , birds song evrey day , take real care to beutiful birds.</p>
                </div>
            </article>
        </section>

    );
};

export default Who;