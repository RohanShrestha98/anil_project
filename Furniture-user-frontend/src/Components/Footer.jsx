import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div>
            <hr />
            <div className='grid grid-cols-4 gap-6 px-10 py-5 sm:grid-cols-1 sm:gap-2 md:grid-cols-1 md:gap-2'>
                <div>
                    <h3 className='text-base font-medium'>Funiro.</h3>
                    <p className='text-xs font-normal py-4 text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA</p>
                </div>
                <div className='sm:py-2'>
                    <h5 className='text-xs font-normal text-[#9F9F9F]'>Links</h5>
                    <ul className='list-none'>
                        <li onClick={()=>navigate("/")} className='py-1 text-xs font-medium'>Home</li>
                        <li onClick={()=>navigate("/shop")} className='py-1 text-xs font-medium'>Shop</li>
                        <li onClick={()=>navigate("/contact")} className='py-1 text-xs font-medium'>Contact</li>
                    </ul>
                </div>
                <div className='sm:py-2 cursor-pointer'>
                    <h5 className='text-xs font-normal text-[#9F9F9F]'>Help</h5>
                    <ul className='list-none'>
                        <li  onClick={()=>navigate("/checkout")} className='py-1 text-xs font-medium'>Payment Options</li>
                        <li className='py-1 text-xs font-medium'>Privacy Policies</li>
                    </ul>
                </div>
                <div>
                    <h5 className='text-xs font-normal text-[#9F9F9F] py-4'>Newsletter</h5>
                    <div className="flex">
                        <input type="text" placeholder='Enter Your Email Address' className='text-xs font-medium border-b-[1px] p-2 border-b-black mr-2' />
                        <button className='text-xs font-medium p-2 bg-[#B88E2F] text-white'>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr />
            <p className='p-10 text-xs font-medium'>2023 Funiro. All rights reserved.</p>
        </div>
    );
};

export default Footer;
