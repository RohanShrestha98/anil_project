import React from 'react'
import product1 from '../../assets/product1.png'

const products = [
    {
        id: '4342',
        product_name: 'Nothing Earbuds One',
        product_thumbnail: product1,
        product_price: 'Rs 399.00',
        product_stock: 50
    },
    {
        id: '4342',
        product_name: 'Nothing Earbuds One',
        product_thumbnail: product1,
        product_price: 'Rs 399.00',
        product_stock: 0
    },
]

const PopularProduct = () => {
    return (
        <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
            <h2 className="text-gray-700 font-medium">Popular Products</h2>
            <div className="mt-4 flex flex-col gap-3">
                {products.map((product) => (
                    <div className='flex items-center'>
                        <div className='w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm'>
                            <img src={product.product_thumbnail} alt={product.product_name} className='w-full h-full object-cover rounded-sm' />
                        </div>
                        <div className='ml-4 flex-1'>
                            <p className='text-sm text-gray-800'>{product.product_name}</p>
                            <span className={`text-sm ${product.product_stock === 0 ? 'text-red-500' : 'text-green-500'}`}>{product.product_stock === 0 ? 'Out of Stock' : product.product_stock}</span>
                        </div>
                        <div className="text-xs text-gray-400">{product.product_price}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularProduct
