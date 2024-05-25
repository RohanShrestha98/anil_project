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
    const [selectedCategory, setSelectedCategory] = useState('');
    const {data} = useProductData()
    const filterData = data?.data?.filter(item => {
        // Filter out items where isRohan is false
        if (item?.isRohan === false) return false;
        
        // Filter items within the price range
        if ((minPrice && parseInt(item?.price) < parseInt(minPrice)) || (maxPrice && parseInt(item?.price) > parseInt(maxPrice))) return false;
      
        // Filter items based on the selected category
        if (selectedCategory && item.category !== selectedCategory) return false;
      
        // Include all other items
        return true;
      });
      
      // finalData will contain the filtered data based on the conditions
      const finalData = filterData?.filter((item)=>!item?.isRohan) || [];

      const categoryData = data?.data?.filter((item)=>!item?.isRohan)
      
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
      };

    const uniqueCategories = [...new Set(categoryData?.map(item => item.category))];

    return (
        <div>
            <Banner title={`Shop`} />
            <ShopFilter  setSelectedCategory={setSelectedCategory} uniqueCategories={uniqueCategories} handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} setMaxPrice={setMaxPrice}  setMinPrice={setMinPrice} category={location?.state} filterData={finalData}/>
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
