import { useForm } from "react-hook-form"
import { useAuthMutation } from "../hooks/useMutateData"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore"
import { toast } from "react-toastify"
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import logo from '../assets/logo.png'


export default function Login() {
    const {register,reset,handleSubmit} = useForm()
    const authMutation = useAuthMutation()
    const navigate = useNavigate()
    const { setUser } = useAuthStore();
    const [error ,setError] = useState("")
    const [eye ,setEye] = useState(false)

    const onSubmitHandler = async (data) => {
        try {
          const result = await authMutation.mutateAsync(["post", "", data]);
          navigate("/");
          console.log("result",result)
          localStorage.setItem("user",JSON.stringify({ token: result?.accessToken, refresh: result?.accessToken, data: result?.data }))
          console.log("success")
          reset();
        } catch (error) {
          setError(error?.response?.data?.errors);
          toast.error(error?.response?.data?.errors?.error)
        }
      };
  return (
    <div className='grid h-screen grid-cols-2 '>
      <div className='h-full  bg-[#222222]'></div>
      <div className='h-full border flex flex-col items-center justify-center'>
        <form onSubmit={handleSubmit(onSubmitHandler)} className='flex flex-col gap-3 w-[60%]'>
            <div className="mb-10">
        <div className='flex items-center justify-center gap-1  py-3'>
                <img src={logo} alt="logo" className='w-10' />
                <span className='text-[#222222] text-xl  font-medium'>Furniro</span>
            </div>
            <p className="text-center text-base font-medium text-gray-500">Login in into Furniro</p>
            </div>
            <div>
            <p className="text-sm font-semibold text-gray-500 mb-1">Email <span className="text-red-500">*</span></p>
            <input type="text" {...register("email")} className="border outline-none  focus-visible:border-black w-full px-3 py-1"/>
            </div>
            <div>
                <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-500 mb-1">Password <span className="text-red-500">*</span></p>
            <div className="text-gray-600" onClick={()=>setEye(!eye)}>
            {
                eye? <BsEyeSlash />:<BsEye />
            }
            </div>
            
            </div>
            <input type={eye?"text":"password"} {...register("password")} className="border w-full outline-none focus-visible:border-black px-3 py-1"/>
            </div>
            
            <button className="w-full bg-[#222222] text-white py-2 mt-4">Login </button>
        </form>
      </div>
    </div>
  )
}
