import product from '../assets/all_product'


const ProductItem = ({ handleClick, coverImg, discount, title, description, newPrice, oldPrice }) => {
    return (
        <div
            className='bg-[#F4F5F7] relative hover:opacity-50 '
            onClick={handleClick}
        >
            <img
                src={coverImg??product}
                alt="product"

                className='w-full h-60 object-cover cursor-pointer'
            />
            {discount > 0 && (
                <div className='bg-red-500 h-12 w-12 rounded-full p-2 text-center text-white absolute top-2 right-2'>-{discount}%</div>
            )}
            <div className='p-4'>
                <h4 className='text-lg font-semibold'>{title}</h4>
                <p className='text-sm font-normal text-[#898989]'>{description?.slice(0,50)}</p>
                <div className='flex justify-between items-center mt-2'>
                    <span className='text-sm font-bold text-[#3A3A3A]'>{newPrice}</span>
                    {oldPrice && <span className='text-sm font-normal text-[#B0B0B0] line-through'>{oldPrice}</span>}
                </div>
            </div>
            <div>
            </div>
            <button className='absolute top-[30%] left-[25%] bg-white text-[#B88E2F] text-xs font-semibold items-center px-6 py-2 opacity-0'>Add to Cart</button>
        </div>
    )
}

export default ProductItem
