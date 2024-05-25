import React from 'react';
import category1 from '../assets/dining.png';
import category2 from '../assets/Image-living room.png';
import category3 from '../assets/bedroom.png';
import { useNavigate } from 'react-router-dom';

const categories = [
    { image: category1, alt: "Dining", title: "Dining" },
    { image: category2, alt: "Living", title: "Living" },
    { image: category3, alt: "Bedroom", title: "Bedroom" }
];


const Category = () => {
    const navigate = useNavigate()
    return (
        <div className='p-20 sm:px-2 md:px-1'>
            <h2 className='text-center text-3xl font-bold sm:text-xl'>Browse The Range</h2>
            <p className='text-center py-2 text-lg font-normal sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='grid grid-cols-3 gap-2 mx-auto sm:grid-cols-1 md:grid-cols-2'>
                {categories.map((category, index) => (
                    <div key={index} onClick={()=>navigate("/shop",{state:category})}>
                        <img src={category.image} alt={category.alt} className='p-10' />
                        <p className='text-lg font-semibold text-center'>{category.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
