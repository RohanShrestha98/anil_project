import React, { useEffect, useState } from 'react'
import product1 from '../assets/product1.png';
import del from '../assets/delete.png';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const CartSection = () => {
    const existingArrayString = localStorage.getItem("myCart");
  const existingArray = JSON.parse(existingArrayString) || [];
  const [addCartData ,setAddCartData] = useState(existingArray)
  const [hasRemoveCart,setHasRemoveCart] = useState(false)
  const filterData = addCartData?.filter((item)=>!item?.isRohan)
  const [selectedCart,setSelectedCart] = useState(filterData?.[0])
  const navigate = useNavigate()


  const handleRemoveFromCart = (item)=>{
    const indexToRemove = existingArray.findIndex(obj => obj._id === item?._id);
    if (indexToRemove !== -1) {
      existingArray.splice(indexToRemove, 1);
      const updatedArrayString = JSON.stringify(existingArray);
      localStorage.setItem('myCart', updatedArrayString);
    }
    setHasRemoveCart(!hasRemoveCart)
    toast.success("Remove from cart")
  }
   useEffect(()=>{
     setAddCartData(existingArray)
  },[hasRemoveCart])


    return (
        <div className='flex justify-around py-16 sm:flex-col md:flex-col'>
            <div>
                <div className='grid grid-cols-5 gap-10 bg-[#F9F1E7] px-4 py-4'>
                    <p className='text-sm font-medium'>Product</p>
                    <p className='text-sm font-medium'>Price</p>
                    <p className='text-sm font-medium'>Quantity</p>
                    <p className='text-sm font-medium'>Subtotal</p>
                    <p className='text-sm font-medium'>Action</p>
                </div>
                {
                    filterData?.map((item)=>{
                        return <div key={item?.id} onClick={()=>setSelectedCart(item)} className={`grid grid-cols-5 gap-10 px-4 py-4 items-center ${item?._id === selectedCart?._id && "bg-blue-50"}`}>
                        <div className='flex gap-2 items-center sm:flex-col'>
                            <img src={item?.images?.[0]?.url??product1} alt="product" className='w-12 h-12' />
                            <p className='text-sm text-[#9F9F9F] font-normal'>{item?.name}</p>
                        </div>
                        <p className='text-sm text-[#9F9F9F] font-normal'>Rs {item?.price}</p>
                        <p className='text-sm text-[#9F9F9F] font-normal'> {item?.count}</p>
                        
                        <p className='text-sm font-normal'>Rs {item?.price * item?.count}</p>
                        <img src={del} onClick={()=>handleRemoveFromCart(item)} alt="delete" className='w-5 h-5' />
                    </div>
                    })
                }
                
            </div>
            <div className='flex flex-col bg-[#F9F1E7] justify-center px-10 py-8 gap-6 sm:m-10 md:m-20 md:w-80'>
                <h2 className='text-lg font-semibold'>Cart Totals</h2>
                <div className='flex gap-5'>
                    <h5 className='text-xs font-medium'>Subtotal</h5>
                    <p className='text-xs font-medium text-[#9F9F9F]'>Rs. {(selectedCart?.price * selectedCart?.count)}</p>
                </div>
                <div className='flex gap-10'>
                    <h5 className='text-xs font-medium'>Total</h5>
                    <p className='text-sm font-medium text-[#B88E2F]'>Rs. {(selectedCart?.price * selectedCart?.count)- (selectedCart?.discount * selectedCart?.count)}</p>
                </div>
                    <button onClick={()=>navigate("/checkout",{state:selectedCart})} className='items-center border border-black w-28 h-10 rounded'>Checkout</button>
            </div>
        </div>
    )
}

export default CartSection
