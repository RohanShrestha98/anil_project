import moment from 'moment/moment';
import {  useTrackOrderData } from '../../hooks/useQueryData';
import { useStatusToggleMutation } from '../../hooks/useMutateData';
import { useState } from 'react';
import { toast } from 'react-toastify';

const TrackOrder = () => {
   

    const {data,isLoading,isError} = useTrackOrderData()
    const [statusToggle, setStatusToggle] = useState(false)
    const [selectedStatus, setSelectedStatus] = useState()
    const [selectedProduct, setSelectedProduct] = useState()
    const statusChangeMutation = useStatusToggleMutation()
    const filterData = data?.data?.filter((item)=>item?.isAnil)

    const status = [
        {
            value: "Pending",
            label: "Pending"
        },
        {
            value: "On the way",
            label: "On the way"
        },
        {
            value: "Delivered",
            label: "Delivered"
        },
    ]

    const handleStatusChange = async (data, id, status) => {
        const postData = {
            ...data,
            status: status
        }
        console.log("postData",postData)
        try {
            const response = await statusChangeMutation.mutateAsync(["patch", `update/${id}`, postData])
            toast.success("Order status change successfully")
        } catch (err) {
            console.log("err", err)
        }
    }
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <div className='flex justify-between'>
                <h2 className="text-gray-700 font-medium">Order Product</h2>
            </div>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-sm text-gray-700">
                    <thead className='border-y h-8 bg-gray-200'>
                        <tr>
                            <th>Product name</th>
                            <th>Description</th>
                            <th>User</th>
                            <th>Brand</th>
                            <th>No of items</th>
                            <th>Price</th>
                            <th>Publish Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterData?.map((user) => 
                            {console.log("user",user)
                                 return <tr key={user?.id} className='border-b h-8'>
                                <td className="flex items-center gap-1">
                        {
                            user?.images?.[0]?.url ? <img className="h-8 w-8 object-cover rounded-full" src={user?.images?.[0]?.url} alt="" />
                                : <div className="min-h-8 min-w-8 rounded-full bg-gray-100"></div>
                        }
                        <p className="flex items-center gap-1 line-clamp-1">
                            {user?.name ?? "-"}
                        </p>
                    </td>
                                <td className='text-center'>{user?.description?.slice(0,50)}</td>
                                <td className='text-center'>{user?.userDetails?.fname}</td>
                                <td className='text-center'>{user?.brand}</td>
                                <td className='text-center'>{user?.count}</td>
                                <td className='text-center'>Rs {user?.price}</td>
                                <td className='text-center'>Rs {moment(user?.createdAt).format("MMM Do YYYY, h:mm:ss a")}</td>
                                <td className="relative w-[90px] cursor-pointer">
                        <p onClick={() => {
                            setStatusToggle(!statusToggle)
                            setSelectedProduct(user?._id)
                        }} className={`w-[90px] ${(user?.status === "Pending" || user?.status === "pending") ? "bg-yellow-500 " : "bg-green-500 "}text-center py-1 rounded-full text-white `}>
                            {user?.status}
                        </p>
                        {
                            statusToggle && selectedProduct === user?._id && <div className="absolute z-20 bg-white shadow-md w-[100px]  mt-1 py-2 flex flex-col gap-2">
                                {
                                    status?.map((item) => {
                                        return <p onClick={() => {
                                            setSelectedStatus(item)
                                            handleStatusChange(user, user?._id, item?.value)
                                            setStatusToggle(!statusToggle)
                                        }} key={item?.value} className={`px-4 py-[2px] hover:bg-gray-100 ${selectedStatus?.value === item?.value ? "bg-gray-100" : ""}`}>{item?.label}</p>
                                    })
                                }
                            </div>
                        }
                    </td>
                            </tr>}
                        )}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default TrackOrder
