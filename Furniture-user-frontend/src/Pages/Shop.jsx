import React, { useState } from 'react';
import ProductItem from '../Components/ProductItem';
import Banner from '../Components/Banner';
import ShopFilter from '../Components/ShopFilter';
import BannerButtom from '../Components/BannerButtom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useProductData } from '../hooks/useQueryData';


const Shop = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const handleProductClick = (item) => {
        navigate('/product',{state:{item}})
    }
    const [minPrice,setMinPrice] = useState("")
    const [maxPrice,setMaxPrice] = useState("")
    const {data} = useProductData()
    const filterData = data?.data?.filter((item)=> !item?.isRohan)
    const filterMinMaxData = filterData?.filter((item) => item?.price >= minPrice && item?.price <= maxPrice);
    const finalData = (maxPrice || minPrice) ?filterMinMaxData:filterData
    console.log("minPrice",filterMinMaxData)

    return (
        <div>
            <Banner title={`Shop`} />
            <ShopFilter setMaxPrice={setMaxPrice}  setMinPrice={setMinPrice} category={location?.state} filterData={filterData}/>
            <div className='m-20'>
                <div className='grid grid-cols-4 gap-6 justify-center sm:grid-cols-1 md:grid-cols-2'>
                {finalData?.map((item, i) => {
                    return <ProductItem handleClick={()=>handleProductClick(item)} key={i} id={item.id} coverImg={item?.images?.[0]?.url} title={item.name} discount={item.discount} description={item.description} newPrice={item.price} oldPrice={item.oldPrice} />
                })}
                </div>
            </div>
            <BannerButtom />
        </div>
    );
};

export default Shop;
