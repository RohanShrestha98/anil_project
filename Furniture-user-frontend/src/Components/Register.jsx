import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthRegisterMutation } from "../hooks/useMutateData";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import loginImage from '../assets/login.png';
import { toast } from "react-toastify";

const Register = () => {
  const authRegisterMutation = useAuthRegisterMutation();
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: "onChange",
  });

  const onSubmitHandler = async (data) => {
    try {
      const result = await authRegisterMutation.mutateAsync(["post", "", data]);
      reset();
      toast.success("Register successfull")
      navigate("/login");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className='grid h-screen grid-cols-2 '>
      <div className='h-full w-full'>
        <img className="h-screen w-full object-cover " src={loginImage} alt="" />
      </div>
      <div className='h-full border flex flex-col items-center justify-center'>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col gap-2  w-[330px]"
        >
          <div className="mb-10">
            <h1 className="font-bold text-center text-gray-700 text-lg">Register</h1>
            <p className="text-sm text-center">Create your account</p>
          </div>

          <input
            className="border outline-none  focus-visible:border-black w-full px-3 py-1"
            {...register("username", { required: true })}
            type="text"
            placeholder="Enter your username"
          />
          {errors.username && <span>Username is required.</span>}

          <input
            className="border outline-none  focus-visible:border-black w-full px-3 py-1"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && <span>Email is required and must be valid.</span>}

          <div className="border outline-none flex items-center   hover:border-black w-full px-3 py-1">
            <input
              className="w-full outline-none"
              {...register("password", { required: true, minLength: 8, pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/ })}
              type={eye ? "text" : "password"}
              placeholder="Enter your password"
            />
            <div className="cursor-pointer" onClick={() => setEye(!eye)}>
              {eye ? <LuEyeOff /> : <LuEye />}
            </div>
          </div>
          {errors.password && <span>Password is required and must contain at least 8 characters, including letters, numbers, and special characters.</span>}

          <button className="w-full bg-[#222222] text-white py-2 mt-4">Register</button>
          <p className="text-sm text-end">Already have an account? <span className="underline cursor-pointer text-blue-700 font-semibold" onClick={() => navigate("/login")}>Login</span></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
