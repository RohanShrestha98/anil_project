import React from 'react'

const Input = ({ label, register, registerName, type, placeholder, defaultValue, required,
    className = 'w-72 p-2 bg-[#E5E5E5] border border-[#8692A6] rounded' }) => {
    // className = 'border border-[#9F9F9F] p-2 my-1 text-sm w-72 rounded-md block' }) => {
    return (

        <div className='flex flex-col gap-2 my-3'>
            <label
                className='text-xs text-[#696F79]'
            >{label}</label>
            <input
                {...register(registerName)}
                type={type}
                defaultValue={defaultValue}
                placeholder={placeholder}
                className={className}
                required={required}
            />
        </div>
    )
}

export default Input
