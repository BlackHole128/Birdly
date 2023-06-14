import React from 'react';

const What = () => {
    return (
        <section className='container ml-auto mr-auto p-16 mt-20 mb-10'>
            <h1 className='text-3xl font-bold mt-10 mb-10 text-center' data-aos="fade-up">What We Do Here</h1>
            <article className='grid grid-cols-1 lg:grid-cols-2 gap-24 mt-10' data-aos="fade-up">
                <div className='my-auto'>
                    <p className='text-2xl'>
                        We catalog exotic birds, Take care of them.<br/>
                        We take order from our posh customers who loves birds and beauty of nature.<br/>
                        We give best quality of sell service to all of our customers.<br/>
                        We commit first delivery of orders. 

                    </p>

                    <button className='mt-5 btn'>Contact us!</button>
                </div>
                <div>
                    <img className='rounded-lg' src='https://cdn.pixabay.com/photo/2020/02/28/15/35/bird-4887736_960_720.jpg' alt=''/>
                </div>
            </article>
        </section>
    );
};

export default What;