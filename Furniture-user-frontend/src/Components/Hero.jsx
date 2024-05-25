import React from 'react';
import backgroundImage from '../assets/scandinavian-interior-mockup-wall-decal-background 1.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className="hero relative h-[90vh]">
            <div className="box bg-[#FFF3E3] px-7 py-4 w-96 rounded-sm relative top-40 left-2/3 z-10 sm:left-0 sm:w-full md:w-1/2 md:left-20 sm:top-60">
                <span className="text-sm font-semibold tracking-widest">New Arrival</span>
                <div className="text-3xl font-bold tracking-normal text-[#B88E2F] mt-px sm:text-2xl">Discover Our <br /> New Collection</div>
                <p className="text-sm font-medium mt-1 sm:text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button onClick={()=>navigate("/shop")} className="text-sm font-medium bg-[#B88E2F] px-7 py-2 text-white mt-5 rounded-md hover:bg-[#987022] transition duration-300 ease-in-out">BUY NOW</button>
            </div>

            <img src={backgroundImage} alt="Hero Background" className="absolute top-0 h-[90vh] w-full object-cover" />
        </div>
    );
};

export default Hero;
