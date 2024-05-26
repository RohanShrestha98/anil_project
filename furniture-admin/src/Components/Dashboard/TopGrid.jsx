import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import { useProductData, useTrackOrderData } from '../../hooks/useQueryData'



const TopGrid = () => {
    const {data,isLoading,isError} = useTrackOrderData()
    const {data:productData} =useProductData()
    
    const filterData = data?.data?.filter((item)=>item?.isAnil)
    const filterProductData = productData?.data?.filter((item)=>!item?.isRohan)
    
    const totalPrice = filterProductData.reduce((total, item) => parseInt(total) + parseInt(item.price), 0);

    const topData = [
        { id: 1, icon: <IoBagHandle className='text-2xl text-white' />, title: 'Total Product', value: filterProductData?.length, addvalue: 343, bgColor: 'bg-sky-500' },
        { id: 4, icon: <IoCart className="text-2xl text-white" />, title: 'Total Orders', value: filterData?.length, addvalue: -43, bgColor: 'bg-green-600' },
        { id: 2, icon: <IoPieChart className='text-2xl text-white' />, title: 'Total Expenses', value:"Rs " + totalPrice, addvalue: -343, bgColor: 'bg-orange-500' },
        { id: 3, icon: <IoPeople className="text-2xl text-white" />, title: 'Total Customers', value: 12313, addvalue: 30, bgColor: 'bg-yellow-400' },
        
    ]
    return (
        <div className='flex gap-4'>
            {topData.map((data) => (
                <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
                    <div className={`rounded-full h-12 w-12 flex items-center justify-center ${data.bgColor}`}>
                        {data.icon}
                    </div>
                    <div className='pl-4'>
                        <span className='text-sm text-gray-500 font-light'>{data.title}</span>
                        <div className='flex items-center'>
                            <strong className='text-xl text-gray-700 font-semibold'>{data.value}</strong>
                            <span className={`text-sm pl-2 ${data.addvalue > 0 ? 'text-green-500' : 'text-red-500'}`}>{data.addvalue > 0 ? '+' : ''}{data.addvalue}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TopGrid
