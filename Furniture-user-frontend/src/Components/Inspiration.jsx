import React from 'react';
import img1 from '../assets/Rectangle24.png';
import img2 from '../assets/Rectangle25.png';
import img3 from '../assets/Rectangle26.png';
import { useNavigate } from 'react-router-dom';

const Inspiration = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-[#FCF8F3] flex justify-center items-center my-5 p-6 gap-20 sm:flex-col sm:gap-10 md:flex-col'>
            <div className='w-80 sm:p-2'>
                <h2 className='text-3xl font-bold'>50+ Beautiful Room Inspirations</h2>
                <p className='text-sm font-normal py-4'>Our designers have created numerous beautiful room prototypes to inspire you.</p>
                <button onClick={()=>navigate("/shop")} className="text-sm font-medium bg-[#B88E2F] px-8 py-2 text-white rounded-md hover:bg-[#987022] transition duration-300 ease-in-out">Explore More</button>
            </div>
            <div className='flex gap-6'>
                <div className='relative'>
                    <img src={img1} alt="Bed Room" className='h-96 object-cover rounded-lg' />
                    <div className='absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 '>
                        <p className='text-xs font-light pb-1'>01 - Bed Room</p>
                        <h5 className='font-medium'>Inner Peace</h5>
                    </div>
                    <button className='absolute bottom-4 left-32 bg-[#B88E2F] px-2 text-white text-xl'>&#8594;</button>
                </div>
                <div className='relative sm:hidden'>
                    <img src={img2} alt="Living Room" className='h-96 object-cover rounded-lg' />
                    <button className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-80 p-1 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#B88E2F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div className='relative'>
                    <img src={img3} alt="Living Room" className='h-96 object-cover rounded-lg' />
                </div>
            </div>
        </div >
    );
};

export default Inspiration;
