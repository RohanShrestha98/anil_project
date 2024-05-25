import React, { useEffect, useState } from 'react'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import CompareModal from './CompareModal'
import moment from 'moment'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const products = [
    { image: product1, title: 'Asgaard Sofa', price: 'Rs 250,000' },
    { image: product2, title: 'Outdoor Sofa Set', price: 'Rs. 224,000' },
]
const general = [
    { name: 'Sales Package' },
    { name: '1 sectional sofa' },
    { name: '1 Three Seater, 2 Single Seater' },
    { name: 'Model Number' },
    { name: 'TFCBLIGRBL6SRHS' },
    { name: 'DTUBLIGRBL568' },
    { name: 'Secondary Material' },
    { name: 'Solid Wood' },
    { name: 'Solid Wood' },
    { name: 'Configuration' },
    { name: 'L-shaped' },
    { name: 'L-shaped' },
    { name: 'Upholstery Material' },
    { name: 'Fabric + Cotton' },
    { name: 'Fabric + Cotton' },
    { name: 'Upholstery Color' },
    { name: 'Bright Grey & Lion' },
    { name: 'Bright Grey & Lion' },
]

const product = [
    { name: 'Filling Material' },
    { name: 'Foam' },
    { name: 'Matte' },
    { name: 'Finish Type' },
    { name: 'Bright Grey & Lion' },
    { name: 'Bright Grey & Lion' },
    { name: 'Adjustable Headrest' },
    { name: 'No' },
    { name: 'Yes' },
    { name: 'Maximum Load Capacity' },
    { name: '280 KG' },
    { name: '300 KG' },
    { name: 'Origin of Manufacture' },
    { name: 'India' },
    { name: 'India' },
]
const dimension = [
    { name: 'Width' },
    { name: '265.32 cm' },
    { name: '265.32 cm' },
    { name: 'Height' },
    { name: '76 cm' },
    { name: '76 cm' },
    { name: 'Depth' },
    { name: '167.76 cm' },
    { name: '167.76 cm' },
    { name: 'Weight' },
    { name: '45 KG' },
    { name: '65 KG' },
    { name: 'Seat Height' },
    { name: '41.52 cm' },
    { name: '41.52 cm' },
    { name: 'Leg Height' },
    { name: '5.46 cm' },
    { name: '5.46 cm' },
]

const ProductCompare = () => {
    const [firstModal,setFirstModal] = useState(false)
    const [firstModalSelectedProduct,setFirstModalSelectedProduct] = useState()
    const [secondModal,setSecondModal] = useState(false)
    const [secondModalSelectedProduct,setSecondModalSelectedProduct] = useState()
    const [count, setCount] = useState(1);
    const [selectedSize,setSelectedSize] = useState("small")
    const [countFirst, setCountFirst] = useState(1);
    const [selectedSizeFirst,setSelectedSizeFirst] = useState("small")
    const [cartToggle, setCartToggle] = useState(false);
    const [hasAddCart, setHasAddCart] = useState(false);

    const navigate = useNavigate()

    const existingArrayString = localStorage.getItem("myCart");
    const existingArray = JSON.parse(existingArrayString) || [];
  
    
  
    const handleAddToCart = (newObject) => {
      existingArray.push(newObject);
      const updatedArrayString = JSON.stringify(existingArray);
      localStorage.setItem("myCart", updatedArrayString);
      setCartToggle(!cartToggle)
      toast.success("Added to cart")
    };

    const handleRemoveFromCart = (id)=>{
        const indexToRemove = existingArray.findIndex(obj => obj._id ===id);
        if (indexToRemove !== -1) {
          existingArray.splice(indexToRemove, 1);
          const updatedArrayString = JSON.stringify(existingArray);
          localStorage.setItem('myCart', updatedArrayString);
          setCartToggle(!cartToggle)
          toast.success("Remove from cart")
        }
      }


    const compareProduct = [
        {
            label:"Name",
            value:firstModalSelectedProduct?.name
        },
        {
            label:"Description",
            value:firstModalSelectedProduct?.description
        },
        {
            label:"Brand",
            value:firstModalSelectedProduct?.brand

        },
        {
            label:"Category",
            value:firstModalSelectedProduct?.category
        },
        {
            label:"Price",
            value:firstModalSelectedProduct?.price
        },
        {
            label:"Discount",
            value:firstModalSelectedProduct?.discount
        },
        {
            label:"Uploaded At",
            value:moment(firstModalSelectedProduct?.createdAt).format("MMM Do YYYY, h:mm:ss a")
        },
    ]
    const compareSecondProduct = [
        {
            label:"Name",
            value:secondModalSelectedProduct?.name
        },
        {
            label:"Description",
            value:secondModalSelectedProduct?.description
        },
        {
            label:"Brand",
            value:secondModalSelectedProduct?.brand

        },
        {
            label:"Category",
            value:secondModalSelectedProduct?.category
        },
        {
            label:"Price",
            value:secondModalSelectedProduct?.price
        },
        {
            label:"Discount",
            value:secondModalSelectedProduct?.discount
        },
        {
            label:"Uploaded At",
            value:moment(secondModalSelectedProduct?.createdAt).format("MMM Do YYYY, h:mm:ss a")
        },
    ]

    console.log("secondModalSelectedProduct",secondModalSelectedProduct)
    return (
        <div className='flex flex-col gap-8 px-56 py-12 sm:px-2 md:px-4'>
            <h2 className='text-base text-center font-medium sm:text-sm'>Choose two products and compare</h2>
            <div className='grid grid-cols-2 gap-16'>
                <div className='border px-6 py-4'>
                    <div onClick={()=>setFirstModal(!firstModal)} className='bg-gray-200 cursor-pointer font-medium text-gray-800 px-4 py-2 rounded-lg'>
                    Choose the Product 
                    </div>
                    <CompareModal  id={"first"} setIsOpen={setFirstModal} isOpen={firstModal} setSelectedProduct={setFirstModalSelectedProduct}/>
                    <div className='flex flex-col'>
                        <img src={firstModalSelectedProduct?.images?.[0]?.url} className='w-[80%] ml-[10%] py-8' alt="" />
                      {
                        compareProduct?.map((item)=>{
                            return <div key={item?.id} className='grid grid-cols-2'>
                                <p className='font-semibold'>{item?.label}</p>
                                <p className='font-semibold text-sm text-gray-700'>{item?.value}</p>
                            </div>
                        })
                      } 
                       <div className='grid grid-cols-2 mb-2'>
                      <p className='font-semibold'>Count</p>
                      <input type="number" onChange={(e)=>setCountFirst(e.target.value)} defaultValue={1} min={1} className='border-2 border-gray-200  pl-3 rounded-lg' /> 
                      </div>
                      <div className='grid grid-cols-2'>
                      <p className='font-semibold'>Size</p>
                      <div className='flex gap-2 cursor-pointer'>
                            <div onClick={()=>setSelectedSizeFirst("small")} className={`text-sm 
                            ${selectedSizeFirst === "small"?"bg-[#B88E2F] text-white":"bg-[#F9F1E7]"}  px-2 rounded`}>S</div>
                            <div onClick={()=>setSelectedSizeFirst("large")} className={`text-sm  ${selectedSizeFirst === "large"?"bg-[#B88E2F] text-white":"bg-[#F9F1E7]"} px-2 rounded`}>L</div>
                            <div onClick={()=>setSelectedSizeFirst("extraLarge")} className={`text-sm  ${selectedSizeFirst === "extraLarge"?"bg-[#B88E2F] text-white":"bg-[#F9F1E7]"} px-2 rounded`}>XL</div>
                        </div>
                      </div>     
                      <div className='grid grid-cols-2 gap-2 mt-8'>
                        <button onClick={() =>{hasAddCart ? handleRemoveFromCart(firstModalSelectedProduct?._id): handleAddToCart({...firstModalSelectedProduct,size:selectedSizeFirst,count:countFirst,status:"pending"})}} className='border border-black h-10 py-1 text-center w-full rounded-xl'>{hasAddCart ? "Remove from":"Add to"} Cart</button>
                        {/* <button className='border-2 border-black h-10 py-1 px-6 rounded-xl'>+ Compare</button> */}
                        <button onClick={()=>navigate("/checkout",{state:{...firstModalSelectedProduct,size:selectedSizeFirst,count:countFirst,status:"pending"}})} className='border border-black h-10 py-1  px-6 rounded-xl'>Buy Now</button>
                    </div>                  
                    </div>
                </div>
                <div className='border px-6 py-4'>
                    <div onClick={()=>setSecondModal(!secondModal)} className='bg-gray-200 cursor-pointer font-medium text-gray-800 px-4 py-2 rounded-lg'>
                    Choose the Product 
                    </div>
                    <CompareModal id={"second"} setIsOpen={setSecondModal} isOpen={secondModal} setSelectedProduct={setSecondModalSelectedProduct}/>
                    <div className='flex flex-col'>
                        <img src={secondModalSelectedProduct?.images?.[0]?.url} className='w-[80%] ml-[10%] py-8' alt="" />
                      {
                        compareSecondProduct?.map((item)=>{
                            return <div key={item?.id} className='grid grid-cols-2'>
                                <p className='font-semibold'>{item?.label}</p>
                                <p className='font-semibold text-sm text-gray-700'>{item?.value}</p>
                            </div>
                        })
                      }   
                      <div className='grid grid-cols-2 mb-2'>
                      <p className='font-semibold'>Count</p>
                      <input type="number" onChange={(e)=>setCount(e.target.value)} defaultValue={1} min={1} className='border-2 border-gray-200  pl-3 rounded-lg' /> 
                      </div>
                      <div className='grid grid-cols-2'>
                      <p className='font-semibold'>Size</p>
                      <div className='flex gap-2 cursor-pointer'>
                            <div onClick={()=>setSelectedSize("small")} className={`text-sm 
                            ${selectedSize === "small"?"bg-[#B88E2F] text-white":"bg-[#F9F1E7]"}  px-2 rounded`}>S</div>
                            <div onClick={()=>setSelectedSize("large")} className={`text-sm  ${selectedSize === "large"?"bg-[#B88E2F] text-white":"bg-[#F9F1E7]"} px-2 rounded`}>L</div>
                            <div onClick={()=>setSelectedSize("extraLarge")} className={`text-sm  ${selectedSize === "extraLarge"?"bg-[#B88E2F] text-white":"bg-[#F9F1E7]"} px-2 rounded`}>XL</div>
                        </div>
                      </div>
                                          
                    </div>
                    <div className='grid grid-cols-2 gap-2 mt-8'>
                        <button onClick={() =>{hasAddCart ? handleRemoveFromCart(secondModalSelectedProduct?._id): handleAddToCart({...secondModalSelectedProduct,size:selectedSize,count:count,status:"pending"})}} className='border border-black h-10 py-1 text-center w-full rounded-xl'>{hasAddCart ? "Remove from":"Add to"} Cart</button>
                        {/* <button className='border-2 border-black h-10 py-1 px-6 rounded-xl'>+ Compare</button> */}
                        <button onClick={()=>navigate("/checkout",{state:{...secondModalSelectedProduct,size:selectedSize,count:count,status:"pending"}})} className='border border-black h-10 py-1  px-6 rounded-xl'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCompare
