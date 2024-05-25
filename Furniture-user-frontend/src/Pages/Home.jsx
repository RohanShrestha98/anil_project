import React from 'react'
import Hero from '../Components/Hero';
import Category from '../Components/Category';
import Product from '../Components/Product';
import Inspiration from '../Components/Inspiration';
import Share from '../Components/Share';

const Home = () => {
    return (
        <div>
            <Hero />
            <Category />
            <Product />
            <Inspiration />
            <Share />
        </div>
    )
}

export default Home
