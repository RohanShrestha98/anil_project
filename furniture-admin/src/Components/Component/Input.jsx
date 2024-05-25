const Input = ({ label, type ,register,registerName}) => {

    const onChange = (e) => {
        const newValue = e.target.value.replace(/\s+/g, '');
        e.target.value = newValue; // Set the processed value back to the input
        return register.onChange(e); // Ensure we pass the event back to react-hook-form
    };

    return (
        <div className="w-full mb-3">
            <label className='text-sm font-normal text-[#596579]'>{label}</label>
            <input
                type={type}
                required
                onChange={onChange}
                {...register(registerName, { onChange })}
                className="mt-1 px-3 py-1 border rounded-lg text-sm font-normal text-[#596579] w-full"
            />
        </div>
    )
}

export default Input