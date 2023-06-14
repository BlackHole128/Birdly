import React from 'react';
import Banner from './Banner/Banner';
import Reviews from './Review/Reviews';
import What from './What/What';
import Who from './Who/Who';

const Aboutus = () => {
    return (
        <div>
            <Banner></Banner> 
            <Who></Who>  
            <What></What>
            <Reviews></Reviews>
        </div>
    );
};

export default Aboutus;