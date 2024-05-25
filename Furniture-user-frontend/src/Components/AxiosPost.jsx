import React from 'react'
import loginImage from '../assets/loginImage.png';
import { useForm } from 'react-hook-form'
import Input from './Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AxiosPost = () => {
    const { handleSubmit, register, reset } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        axios.post('http://159.223.33.101:9005/auth/v3/register/', data).then((response) => {
            console.log(response.status, response.data);
            navigate("/otp", {
                state: {
                    phone: data?.phone
                }
            })
        })
        reset()

    }
    return (
        <div className='grid grid-cols-2 w-full h-screen'>
            <div className='bg-[#2C73EB] p-10'>
                <img
                    src={loginImage}
                    alt="login image"
                    className='mx-auto mt-20 w-80 h-80'
                />
            </div>
            <div className='bg-[#E5E5E5]'>
                <div className='mx-20 my-5'>
                    <h2 className='text-xl font-semibold py-4'>User Details</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex gap-2'>
                            <Input
                                label='First Name'
                                type='text'
                                register={register}
                                registerName='firstName'
                                required
                                className='w-40 p-2 bg-[#E5E5E5] border border-[#8692A6] rounded'
                            />
                            <Input
                                label='Middle Name'
                                type='text'
                                register={register}
                                registerName='middleName'
                                className='w-40 p-2 bg-[#E5E5E5] border border-[#8692A6] rounded'
                            />
                            <Input
                                label='Last Name'
                                type='text'
                                register={register}
                                registerName='lastName'
                                className='w-40 p-2 bg-[#E5E5E5] border border-[#8692A6] rounded'
                            />
                        </div>
                        <Input
                            label='Email'
                            type='text'
                            register={register}
                            registerName='email'
                            required
                        />
                        <Input
                            label='Phone Number'
                            type='tel'
                            register={register}
                            registerName='phone'
                            required
                        />
                        <Input
                            label='Password'
                            type='password'
                            register={register}
                            registerName='password'
                            required
                        />

                        <button type="submit" className='text-white bg-[#2C73EB] w-72 my-5 py-2 rounded'>Register</button>
                        <p className='text-sm text-[#696F79]'>Already have Account? <Link to='/about'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AxiosPost
// onClick={handleSubmitClick}
// 159.223.33.101:9005/auth/v3/register/
