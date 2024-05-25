import ProductItem from './ProductItem';
import { useNavigate } from 'react-router-dom';
import { useProductData } from '../hooks/useQueryData';

const Product = () => {
    const navigate = useNavigate()
    const handleProductClick = (item) => {
        navigate('/product',{state:{item}})
    }
    const {data} = useProductData()

    const filterData = data?.data?.filter((item)=>!item?.isRohan)

    
    return (
        <div className='mx-20 sm:mx-12 md:mx-12'>
            <h2 className='text-center text-3xl font-bold mb-10 sm:text-xl'>Our Products</h2>
            <div className='grid grid-cols-4 gap-6 sm:grid-cols-1 md:grid-cols-2'>
                {filterData?.map((item, i) => {
                    return <ProductItem handleClick={()=>handleProductClick(item)} key={i} id={item.id} coverImg={item?.images?.[0]?.url} title={item.name} discount={item.discount} description={item.description} newPrice={item.price} oldPrice={item.oldPrice} />
                })}
            </div>
            <div className='mt-8 flex justify-center'>
                <button onClick={()=>navigate("/shop")} className='text-[#B88E2F] border-[#B88E2F] border-solid border-2 py-2 px-4 whitespace-nowrap'>Show More</button>
            </div>
        </div>
    );
};

export default Product;
