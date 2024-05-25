import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = 'https://dummyjson.com/products'

const Axios = () => {
    const [items, setItems] = useState()
    const [search, setSearch] = useState('')
    const [filterItems, setFilterItems] = useState()
    const menuItems = [...new Set(filterItems?.map((item) => item.category))]

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setItems(response.data.products)
            setFilterItems(response.data.products)
        })
    }, [])
    // console.log(items);

    const filterCategory = (category) => {
        const newItems = filterItems?.filter((item) => item.category === category)
        setItems(newItems)
    }
    return (
        <div className='m-2'>
            <div>
                <form>
                    <input
                        type="text"
                        placeholder='Search product'
                        className='p-2 border'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>
            <div>
                <h2>Select by category</h2>
                {menuItems?.map((menu) => (
                    <button
                        className='text-white bg-black m-2 p-2 rounded'
                        onClick={() => filterCategory(menu)}
                    >{menu}</button>
                ))}
                <button
                    className='text-white bg-black m-2 p-2 rounded'
                    onClick={() => setItems(filterItems)}>All</button>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                {items?.filter((item) => {
                    return search?.toLowerCase() === '' ? item : item?.title?.toLowerCase()?.includes(search)
                })?.map((item) => (
                    <div key={item?.id}>
                        <img src={item?.thumbnail} alt={item?.title} />
                        <div>{item?.title}</div>
                        <p className='text-sm text-gray-500'>{item?.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Axios
