import React from 'react'

const Textarea = ({ label, placeholder, className = 'border border-[#9F9F9F] p-2 text-sm w-72 h-20 rounded-md resize-none' }) => {
    return (
        <div className='flex flex-col gap-2 py-3'>
            <label htmlFor="message" className='text-xs font-medium'>{label}</label>
            <textarea id="message" placeholder={placeholder} className={className}></textarea>
        </div>
    )
}

export default Textarea
