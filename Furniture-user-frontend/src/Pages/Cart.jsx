import React from 'react'
import Banner from '../Components/Banner';
import BannerButtom from '../Components/BannerButtom';
import CartSection from '../Components/CartSection';

const Cart = () => {
    return (
        <div>
            <Banner title="Cart" />
            <CartSection />
            <BannerButtom />
        </div>
    )
}

export default Cart
