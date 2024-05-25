import React from 'react'
import Banner from '../Components/Banner'
import BannerButtom from '../Components/BannerButtom'
import CheckoutForm from '../Components/CheckoutForm'
import { useLocation } from 'react-router-dom'

const Checkout = () => {
    const location = useLocation()
    const checkoutData = location?.state
    return (
        <div>
            <Banner title="Checkout" />
            <CheckoutForm checkoutData={checkoutData}/>
            <BannerButtom />
        </div>
    )
}

export default Checkout
