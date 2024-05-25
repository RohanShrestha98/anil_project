import React from 'react'

const Breadcrumb = () => {
    return (
        <div>
            <div className='bg-[#F9F1E7] w-full h-16 flex items-center pl-14 text-xs gap-3'>
                <p className='text-[#9F9F9F]'>Home</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <p className='text-[#9F9F9F]'>Shop</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <p className='font-medium'>Asgaard sofa</p>
            </div>
        </div>
    )
}

export default Breadcrumb
