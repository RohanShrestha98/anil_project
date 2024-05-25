import React from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
import { IoIosHelpCircle } from "react-icons/io";
import { HiOutlineViewGrid, HiOutlineShoppingBag, HiOutlineUserGroup, HiOutlineShoppingCart, HiOutlineCurrencyDollar, HiOutlineArrowCircleUp } from "react-icons/hi";

const sideMenu = [
    { id: 1, label: 'Dashboard', menuIcon: <HiOutlineViewGrid />, path: '/' },
    { id: 2, label: 'Product', menuIcon: <HiOutlineShoppingBag />, path: '/product' },
    // { id: 3, label: 'Customer', menuIcon: <HiOutlineUserGroup />, path: '/customer' },
    // { id: 4, label: 'Shop', menuIcon: <HiOutlineShoppingCart />, path: '/shop' },
    { id: 5, label: 'Income', menuIcon: <HiOutlineCurrencyDollar />, path: '/' },
    // { id: 6, label: 'Promote', menuIcon: <HiOutlineArrowCircleUp />, path: '/' },
]
const sideMenuBottom = [
    { id: 1, label: 'Setting', menuIcon: <IoSettingsSharp />, path: '/' },
    { id: 2, label: 'Help', menuIcon: <IoIosHelpCircle />, path: '/' },
]



const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className='text-white bg-neutral-900 w-60 p-3 flex flex-col'>
            <div className='flex items-center gap-1 px-1 py-3'>
                <img src={logo} alt="logo" className='w-8' />
                <span className='text-neutral-100 text-lg font-medium'>Furniro</span>
            </div>
            <div className='flex-1 py-8 flex flex-col gap-0.5'>
                {sideMenu.map((menu) => (
                    <Link to={menu.path} key={menu.id} className="flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-700 rounded-sm text-base ">
                        <span className='text-white'>{menu.menuIcon}</span>{menu.label}
                    </Link>
                ))}
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
                {sideMenuBottom.map((menu) => (
                    <Link to={menu.path} key={menu.id} className='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'>
                        <span>{menu.menuIcon}</span>{menu.label}
                    </Link>
                ))}

                <div onClick={()=>navigate("/login")} className='text-red-500 cursor-pointer flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'>
                    <span>{<IoLogOut />}</span>Logout
                </div>
            </div>
        </div>
    )
}

export default Sidebar
