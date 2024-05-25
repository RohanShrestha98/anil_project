import React, { useState } from 'react'
const data = [{
    "id": 1,
    "name": "Waly",
    "email": "whenrion0@statcounter.com"
}, {
    "id": 2,
    "name": "Candida",
    "email": "cpenswick1@scientificamerican.com"
}, {
    "id": 3,
    "name": "Billye",
    "email": "bwolfer2@hibu.com"
}, {
    "id": 4,
    "name": "Merlina",
    "email": "mspenclay3@example.com"
}, {
    "id": 5,
    "name": "Natka",
    "email": "npollitt4@theatlantic.com"
}]

const SearchFilter = () => {
    const [search, setSearch] = useState('')
    return (
        <div className='m-2'>
            <form>
                <input
                    type="text"
                    placeholder='search'
                    className='border p-1'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((item) => {
                        return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                    }).map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SearchFilter
