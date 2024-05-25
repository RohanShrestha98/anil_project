import React from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch, HiOutlineUserCircle } from 'react-icons/hi'
import user from '../assets/user.png'
import { Menu, Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const PopoverItem = [
    { id: 1, icon: <HiOutlineChatAlt fontSize={26} className='cursor-pointer' />, title: 'Messages', items: 'This is messages panel.' },
    { id: 2, icon: <HiOutlineBell fontSize={26} className='cursor-pointer' />, title: 'Notification', items: 'This is notification panel.' },
]
const menuItem = [
    { id: 1, label: 'Your Profile', path: '/' },
    { id: 2, label: 'Settings', path: '/product' },
    { id: 3, label: 'Log out', path: '/customer' }
]

const Topbar = () => {
    return (
        <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
            <div className='relative'>
                <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 left-3 -translate-y-1/2' />
                <input type="text" placeholder='Search' className='text-sm h-10 w-[24rem] border border-gray-300 rounded pl-11 pr-4 focus:outline-none active:outline-none' />
            </div>

            <div className='flex items-center gap-6 mr-2'>
                {PopoverItem.map((item) => (
                    <Popover className='relative' key={item.id}>
                        <Popover.Button className='focus:outline-none'>
                            {item.icon}
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-52">
                                <div className="bg-white rounded-sm shadow-md px-2 py-2.5">
                                    <strong className="text-gray-700 font-medium">{item.title}</strong>
                                    <div className="mt-2 py-1 text-sm">{item.items}</div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                ))}

                <Menu as="div" className="relative">
                    <Menu.Button>
                        {/* <HiOutlineUserCircle fontSize={26} className='cursor-pointer' /> */}
                        <img src={user} alt="user" className='w-7' />
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className='origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            {menuItem.map((item) => (
                                <Menu.Item>
                                    <Link to={item.path} key={item.id}>
                                        <div
                                            className='hover:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                        >
                                            {item.label}
                                        </div></Link>
                                </Menu.Item>
                            ))}
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div >
    )
}

export default Topbar
