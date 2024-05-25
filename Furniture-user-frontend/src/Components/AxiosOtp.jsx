import React from 'react'
import loginImage from '../assets/loginImage.png';
import Input from './Input'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const AxiosOtp = () => {
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location.state.phone);
    const { handleSubmit, register, reset } = useForm()
    const onSubmit = (data) => {
        const postData = {
            ...data,
            phone: location.state.phone,
        }
        axios.post('http://159.223.33.101:9005/auth/v3/verify-otp/', postData).then((response) => {
            console.log(response.status, response.data);
        })
        reset()
        navigate('/login', {
            state: data?.phone
        })

    }
    return (
        <div className='grid grid-cols-2 w-full'>
            <div className='bg-[#2C73EB] p-10'>
                <img
                    src={loginImage}
                    alt="login image"
                    className='mx-auto w-80 h-80'
                />
            </div>
            <div className='bg-[#E5E5E5]'>
                <div className='mx-32 my-20'>
                    <p>Vefify your otp code</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            label='Enter you OTP code'
                            type='number'
                            register={register}
                            registerName='otp'
                            placeholder='OTP code'
                            required
                        />

                        <button type="submit" className='text-white bg-[#2C73EB] w-72 my-5 py-2 rounded'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        // <div>
        //     <p>Vefify your otp code</p>
        //     <form onSubmit={handleSubmit(onSubmit)}>
        //         <Input
        //             type='number'
        //             register={register}
        //             registerName='otp'
        //             placeholder='OTP code'
        //             required
        //         />
        //         <button type="submit" className='bg-black text-white p-2 rounded'>Verify</button>

        //     </form>
        // </div>
    )
}

export default AxiosOtp
