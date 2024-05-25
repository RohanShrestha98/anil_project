import React, { useState } from 'react'
import filter from '../assets/filter.png';
import round from '../assets/round.png';
import viewList from '../assets/view-list.png';

const ShopFilter = ({category,filterData,setMinPrice,setMaxPrice,uniqueCategories,selectedCategory,setSelectedCategory,handleCategoryChange}) => {
    const [modal,setModal] = useState(false)
    return (
        <div className='bg-[#F9F1E7] h-24 relative flex items-center px-20 text-sm justify-between sm:hidden'>
            <div className='flex gap-2 items-center'>
                <div onClick={()=>setModal(!modal)} className='flex cursor-pointer items-center gap-2'>
                <img src={filter} alt="Filter" className='w-5' />
                <p>Filter</p>
                </div>
                {
                    modal &&  <div className='bg-white w-[200px] flex flex-col gap-2 absolute top-8 mt-8 z-10 p-3  border  '>
                        <input type="number" onFocus={()=>setSelectedCategory(null)} onChange={(e)=>setMinPrice(e.target.value)} className='border px-2 py-[2px] outline-none' placeholder='Enter min price'/>
                        <input type="number" onFocus={()=>setSelectedCategory(null)} onChange={(e)=>setMaxPrice(e.target.value)} className='border  px-2 py-[2px] outline-none' placeholder='Enter max price'/>
                    </div>
                }
               
                
                <p className='text-xs pl-10'>Showing 1-{filterData?.length} of {filterData?.length} results</p>
            </div>

            <div className='flex gap-10'>
                <div className='flex items-center gap-1'>
                    <p className='font-medium text-xs'>Sort by category</p>
                    <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        {uniqueCategories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

                </div>
            </div>
        </div>
    )
}

export default ShopFilter
