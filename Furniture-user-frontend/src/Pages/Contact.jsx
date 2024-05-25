import React from 'react'
import Banner from '../Components/Banner'
import ContactForm from '../Components/ContactForm';
import BannerButtom from '../Components/BannerButtom';

const Contact = () => {
    return (
        <div>
            <Banner title="Contact" />
            <ContactForm />
            <BannerButtom />
        </div>
    )
}

export default Contact
