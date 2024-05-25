/* eslint-disable react/prop-types */

const InputField = ({ label, type, htmlfor, id, placeholder, register,defaultValue, required, className = 'border border-[#9F9F9F] p-2 text-sm w-72 rounded-md' }) => {
    return (
        <div className='flex flex-col gap-2 py-3'>
            <label htmlFor={htmlfor} className='text-xs font-medium'>{label}</label>
            <input type={type} defaultValue={defaultValue} id={id} {...register(htmlfor)} placeholder={placeholder} className={className} />
        </div>
    )
}

export default InputField
