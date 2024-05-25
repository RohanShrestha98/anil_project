import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import Input from '../Component/Input'
import AddProduct from './AddProduct';
import { useQuery } from '@tanstack/react-query';
import { useProductData } from '../../hooks/useQueryData';
import { BiEditAlt } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useFileMutation, useProductMutation } from '../../hooks/useMutateData';
import { toast } from 'react-toastify';

const ProductTable = ({editData}) => {
    const [openAddProduct, setOpenAddProduct] = useState(false)
    const [openEditProduct, setOpenEditProduct] = useState(false)
    const {register,reset,handleSubmit} = useForm()
    const [selectedImage,setSelectedImage] = useState()
    const navigate = useNavigate()
    const productMutation = useProductMutation()

    const fileMutation = useFileMutation();

    const handleFileUpload = async (e) => {
        console.log("e.target.files[0]", e.target.files[0])
        const formData = await new FormData();
        formData.append("file", e.target.files[0]);
        try {
            const result = await fileMutation.mutateAsync(["post", "", formData]);
            setSelectedImage(result?.details);
        } catch (error) {
            console.log("error", error);
        }
    };
    
    const onSubmitHandler = async (data) => {
        const postData = {
            ...data,
            isFurniture:true,
            images: [selectedImage],
        }

        try {
            const response = await productMutation.mutateAsync([editData ? "patch" : "post", editData ? `update/${editData?._id}` : "create/", postData])
            navigate("/product")
            setOpenAddProduct(false)
            toast.success("Product added successfully")
            reset()
        } catch (err) {
            console.log("err", err)
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await productMutation.mutateAsync(["delete", `delete/${id}/`])
            console.log("response", response)
            toast.success("Product delete successfully")
        } catch (err) {
            console.log("err", err)
        }

    }


    const toggleAddProduct = () => {
        setOpenAddProduct(!openAddProduct)
    }
    const toggleEditProduct = () => {
        setOpenEditProduct(!openEditProduct)
    }

    const {data,isLoading,isError} =useProductData()

    console.log("data",data)
    const filterData = data?.data?.filter((item)=>!item?.isRohan)
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <div className='flex justify-between'>
                <h2 className="text-gray-700 font-medium">All Products</h2>
                <button className='text-sm text-white font-medium px-4 py-2 bg-black rounded' onClick={toggleAddProduct}>Add Product</button>
            </div>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-sm text-gray-700">
                    <thead className='border-y h-8 bg-gray-200'>
                        <tr>
                            <th>Product name</th>
                            <th>Description</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterData?.map((user) => 
                            {console.log("user",user)
                                 return <tr key={user?.id} className='border-b h-8'>
                                <td className='text-center'>{user?.name}</td>
                                <td className='text-center'>{user?.description?.slice(0,50)}</td>
                                <td className='text-center'>{user?.brand}</td>
                                <td className='text-center'>Rs {user?.price}</td>
                                <td className='justify-center flex gap-2 mt-1'>
                                    {/* <button className='text-blue-500 text-lg' onClick={toggleEditProduct}><BiEditAlt /></button> */}
                                    <button onClick={()=>handleDelete(user?._id)} className='text-red-500 '><FaRegTrashCan /></button>
                                </td>
                            </tr>}
                        )}
                    </tbody>
                </table>
            </div>
            <div className={`fixed h-screen w-screen bg-black/50 top-0 right-0 backdrop-blur-sm ${openAddProduct ? '' : 'hidden'}`}>
                <div className='text-black bg-white absolute left-60 right-1/2 top-20 bottom-10 w-4/6 h-3/4 p-8 gap-8 z-50'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex justify-between'>
                            <h2 className="text-gray-700 text-xl font-medium">Add new Product</h2>
                            <IoClose fontSize={22} className='text-gray-700 cursor-pointer' onClick={toggleAddProduct} />
                        </div>
                        <form onSubmit={handleSubmit(onSubmitHandler)}>
                            <div className='flex gap-6'>
                                <Input register={register} registerName={"name"} label='Product name' type='text' />
                                <Input  register={register} registerName={"description"} label='Product description' type='text' />
                            </div>
                            <div className='flex gap-6'>
                                <Input  register={register} registerName={"price"} label='Product Price' type='number' />
                                <Input  register={register} registerName={"discount"} label='Discount' type='number' />
                            </div>  
                            <div className='flex gap-6'>
                                <Input  register={register} registerName={"category"} label='Category' type='text' />
                                <Input  register={register} registerName={"brand"} label='Brand' type='text' />
                            </div>
                            <label className='text-sm font-normal text-[#596579]'>Image</label>
            <input
                type={"file"}
                required
                onChange={(e)=>handleFileUpload(e)}
                className="mt-2 p-3 border rounded-lg text-sm font-normal text-[#596579] w-full"
            />
                            <button className='w-32 py-2 mt-4 rounded-lg bg-black text-white'>Add</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`fixed h-screen w-screen bg-black/50 top-0 right-0 backdrop-blur-sm ${openEditProduct ? '' : 'hidden'}`}>
                <div className='text-black bg-white absolute left-60 right-1/2 top-20 bottom-10 w-4/6 h-3/4 p-8 gap-8 z-50'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex justify-between'>
                            <h2 className="text-gray-700 text-xl font-medium">Edit Product</h2>
                            <IoClose fontSize={22} className='text-gray-700 cursor-pointer' onClick={toggleEditProduct} />
                        </div>
                        <form>
                            {/* <div className='flex gap-6'>
                                <Input label='Product Id' type='text' />
                                <Input label='Product Name' type='text' />
                            </div>
                            <div className='flex gap-6'>
                                <Input label='Product Price' type='number' />
                                <Input label='Category' type='text' />
                            </div>
                            <div className='flex gap-6'>
                                <Input label='Product Image' type='file' />
                            </div> */}
                            <button className='w-32 py-2 rounded-lg bg-black text-white'>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductTable
