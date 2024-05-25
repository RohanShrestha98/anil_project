import React, { useState } from 'react'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'

const items = [
    { 'id': 1, 'name': 'White Table', 'image': product1, 'category': 'Table', 'price': 100 },
    { 'id': 2, 'name': 'Sofa 1', 'image': product2, 'category': 'Sofa', 'price': 200 },
    { 'id': 3, 'name': 'Sofa 2', 'image': product3, 'category': 'Sofa', 'price': 350 },
    { 'id': 4, 'name': 'Lamp', 'image': product4, 'category': 'Lamp', 'price': 400 },
]

const Filter = () => {
    const [item, setItems] = useState(items)
    const [search, setSearch] = useState('')
    const menuItems = [...new Set(items.map((val) => val.category))]

    const filterItems = (category) => {
        const newItems = items?.filter((item) => item.category === category)
        setItems(newItems)
    }
    return (
        <div className='m-2'>
            <div className='p-2'>
                <form>
                    <input
                        type="text"
                        placeholder='search product'
                        className='p-2 border'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>
            <div>
                <h2 className='text-base'>Select by category</h2>
                <div className='flex gap-2'>
                    {menuItems.map((item) => (
                        <button
                            onClick={() => filterItems(item)}
                            className='text-white bg-black m-2 px-2 rounded'
                        >
                            {item}
                        </button>
                    ))}
                    <button
                        onClick={() => setItems(items)}
                        className='text-white bg-black m-2 px-2 rounded'
                    >
                        All
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                {item?.filter((item) => {
                    return search?.toLowerCase() === '' ? item : item?.name?.toLowerCase()?.includes(search)
                })?.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        <p className='text-sm text-gray-500'>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter
