import React from 'react'
import location from '../assets/location.png'
import phone from '../assets/phone.png'
import time from '../assets/time.png'
import InputField from './InputField'
import Textarea from './Textarea'
import { useForm } from 'react-hook-form'

const infos = [
    { image: location, title: 'Address', text1: '236 5th SE Avenue, New York NY10000, United States' },
    { image: phone, title: 'Phone', text1: 'Mobile: +(84) 546-6789', text2: 'Hotline: +(84) 456-6789' },
    { image: time, title: 'Working Time', text1: 'Monday-Friday: 9:00 - 22:00', text2: 'Saturday-Sunday: 9:00 - 21:00' }
]

const ContactForm = () => {
    const {register} = useForm()
    return (
        <div>
            <div className='flex flex-col items-center px-10 py-5 gap-2'>
                <h2 className='text-2xl font-semibold '>Get In Touch With Us</h2>
                <p className='text-sm font-normal text-[#9F9F9F]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className='px-96 py-10 flex gap-40 sm:flex-col sm:px-12 sm:gap-12 md:px-8'>
                <div className='flex flex-col gap-10'>
                    {infos.map((info) => (
                        <div className='flex gap-2'>
                            <img src={info.image} alt="icon" className='w-4 h-4' />
                            <div className='w-36'>
                                <p className='text-base font-medium'>{info.title}</p>
                                <p className='text-sm font-normal'>{info.text1}</p>
                                <p className='text-ss font-normal'>{info.text2}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <form>
                        <InputField label='Your name' register={register} htmlfor='name' id='name' type='text' placeholder='Abc' />
                        <InputField label='Email address' register={register} htmlfor='email' id='email' type='email' placeholder='Abc@def.com' required />
                        <InputField label='Subject' type='text' register={register} htmlfor='subject' id='subject' placeholder='This is an optional' required />
                        <Textarea label='Message' placeholder='Hi! i would like to ask about' />
                        <input type="submit" className='text-white text-xs bg-[#B88E2F] px-10 py-2 rounded' />
                    </form>
                </div>
            </div>
        </div >
    )
}

export default ContactForm
