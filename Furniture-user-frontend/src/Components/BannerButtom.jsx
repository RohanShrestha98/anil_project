import React from 'react'
import trophy from '../assets/trophy.png';
import guarantee from '../assets/guarantee.png';
import shipping from '../assets/shipping.png';
import customerSupport from '../assets/customer-support.png';

const items = [
    { image: trophy, h3: 'High Quality', p: 'Crafted from top materials' },
    { image: guarantee, h3: 'Warranty Protection', p: 'Over 2 years' },
    { image: shipping, h3: 'Free Shipping', p: 'Order over $150' },
    { image: customerSupport, h3: '24/7 Support', p: 'Dedicated support' },
]

const BannerButtom = () => {
    return (
        <div className='grid grid-cols-4 gap-20 bg-[#F9F1E7] items-center px-20 py-10 sm:grid-cols-2 sm:px-2 md:px-2 md:gap-6'>
            {items.map((item) => (
                <div className='flex gap-1'>
                    <img src={item.image} alt="Trophy" className='w-10 h-10 md:w-8 md:h-8' />
                    <div>
                        <h3 className='text-base font-semibold sm:text-sm md:text-sm'>{item.h3}</h3>
                        <p className='text-sm font-light text-[#898989] sm:text-xs md:text-xs'>{item.p}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BannerButtom
