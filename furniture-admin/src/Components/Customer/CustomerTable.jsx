import React, { useState } from 'react'
import Input from '../Component/Input'
import { IoClose } from "react-icons/io5";
import { useQuery } from '@tanstack/react-query';

const CustomerTable = () => {
    const [openEditCustomer, setOpenEditCustomer] = useState(false)
    const toggleEditCustomer = () => {
        setOpenEditCustomer(!openEditCustomer)
    }
    const { data } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/users/')
                .then((res) => res.json())
    })
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <div className='flex justify-between'>
                <h2 className="text-gray-700 font-medium">All Customer</h2>
            </div>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-sm text-gray-700">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((user) => (
                            <tr>
                                <td className='text-center'>{user.id}</td>
                                <td className='text-center'>{user.name}</td>
                                <td className='text-center'>{user.email}</td>
                                <td className='text-center'>{user.address.city}</td>
                                <td className='text-center'>{user.phone}</td>
                                <td className='justify-center flex gap-2'>
                                    <button onClick={toggleEditCustomer}>Edit</button>
                                    <button>Delete</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={`fixed h-screen w-screen bg-black/50 top-0 right-0 backdrop-blur-sm ${openEditCustomer ? '' : 'hidden'}`}>
                <div className='text-black bg-white absolute left-60 right-1/2 top-20 bottom-10 w-4/6 h-3/4 p-8 gap-8 z-50'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex justify-between'>
                            <h2 className="text-gray-700 text-xl font-medium">Edit Customer</h2>
                            <IoClose fontSize={22} className='text-gray-700 cursor-pointer' onClick={toggleEditCustomer} />
                        </div>
                        <form>
                            <div className='flex gap-6'>
                                <Input label='Name' type='text' />
                                <Input label='Email' type='email' />
                            </div>
                            <div className='flex gap-6'>
                                <Input label='Address' type='text' />
                                <Input label='Company' type='text' />
                            </div>
                            <div className='flex gap-6'>
                                <Input label='Phone Number' type='tel' />
                                <Input label='Password' type='password' />
                            </div>
                            <button className='w-32 py-2 rounded-lg bg-black text-white'>Edit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CustomerTable
