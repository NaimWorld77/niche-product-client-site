import React from 'react';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div> 
            
            <Banner></Banner>
            <h1>Buy Your Luxury Gold Here</h1>
            <Products></Products>
            
        </div>
    );
};

export default Home;