import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

const topData = [
    { id: 1, icon: <IoBagHandle className='text-2xl text-white' />, title: 'Total Sales', value: 54232, addvalue: 343, bgColor: 'bg-sky-500' },
    { id: 2, icon: <IoPieChart className='text-2xl text-white' />, title: 'Total Expenses', value: 3420, addvalue: -343, bgColor: 'bg-orange-500' },
    { id: 3, icon: <IoPeople className="text-2xl text-white" />, title: 'Total Customers', value: 12313, addvalue: 30, bgColor: 'bg-yellow-400' },
    { id: 4, icon: <IoCart className="text-2xl text-white" />, title: 'Total Orders', value: 16432, addvalue: -43, bgColor: 'bg-green-600' },
]

const TopGrid = () => {
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
                            <strong className='text-xl text-gray-700 font-semibold'>Rs {data.value}</strong>
                            <span className={`text-sm pl-2 ${data.addvalue > 0 ? 'text-green-500' : 'text-red-500'}`}>{data.addvalue > 0 ? '+' : ''}{data.addvalue}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TopGrid
