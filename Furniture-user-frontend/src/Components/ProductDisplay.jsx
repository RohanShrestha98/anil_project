import React, { useEffect, useState } from 'react'
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import star from '../assets/fullstar.png'
import halfStar from '../assets/half-star.png'
import facebook from '../assets/share-facebook.png'
import linkedin from '../assets/share-linkedin.png'
import twitter from '../assets/share-twitter.png'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ProductDisplay = ({productDetails}) => {
    const images = [productDetails?.images?.[0]?.url, product2, product3, product4]
    const [selectedImage, setSelectedImage] = useState(images?.[0])
    const [selectedSize,setSelectedSize] = useState("small")
    const [count, setCount] = useState(1);
    const [cartToggle, setCartToggle] = useState(false);
    const [hasAddCart, setHasAddCart] = useState(false);

    const navigate = useNavigate()

    const discountPercentage = (
        (parseInt(productDetails?.discount) / parseInt(productDetails?.price)) *
        100
      ).toFixed(2);

    const existingArrayString = localStorage.getItem("myCart");
    const existingArray = JSON.parse(existingArrayString) || [];
  
    useEffect(()=>{
      const hasAddToCart = existingArray.some(obj => obj._id === productDetails?._id);
      setHasAddCart(hasAddToCart)
    },[cartToggle])
    
  
    const handleAddToCart = (newObject) => {
      existingArray.push(newObject);
      const updatedArrayString = JSON.stringify(existingArray);
      localStorage.setItem("myCart", updatedArrayString);
      setCartToggle(!cartToggle)
      toast.success("Added to cart")
    };
  
    const handleRemoveFromCart = ()=>{
      const indexToRemove = existingArray.findIndex(obj => obj._id === productDetails?._id);
      if (indexToRemove !== -1) {
        existingArray.splice(indexToRemove, 1);
        const updatedArrayString = JSON.stringify(existingArray);
        localStorage.setItem('myCart', updatedArrayString);
        setCartToggle(!cartToggle)
        toast.success("Remove from cart")
      }
    }
    return (
        <div>
            <div className='flex px-28 py-16 gap-24 sm:flex-col md:flex-col sm:px-5 sm:gap-2 md:gap-6'>
                <div className='flex gap-10 sm:gap-2'>
                    <div className='flex flex-col gap-6'>
                        {images?.map((item) => {
                            return <img key={item} onClick={() => setSelectedImage(item)} src={item} alt="Image 1" className='mini-image bg-[#F9F1E7] w-16 h-14 cursor-pointer' />
                        })}
                    </div>
                    <div>
                        <img src={selectedImage} alt="Image 1" id='displayImage' className='cursor-pointer w-[340px]' />
                    </div>
                </div>
                <div className='w-96 flex flex-col gap-2'>
                    <h2 className='text-2xl	font-normal'>{productDetails?.name}</h2>
                    <div className="flex items-center text-lg gap-2">
              <p className="text-[#2DA5F3]">
                Rs{" "}
                {parseInt(productDetails?.price) -
                  parseInt(productDetails?.discount)}
              </p>
              <p className="text-[#77878F] text-base line-through">
                Rs {parseInt(productDetails?.price)}
              </p>
              <p className="text-[#191C1F] text-sm px-3 ml-2 py-1 font-semibold bg-[#EFD33D]">
                {discountPercentage} %
              </p>
            </div>
                    <div className="rating flex gap-1">
                        <img src={star} alt="star" className='w-3.5 h-3.5' />
                        <img src={star} alt="star" className='w-3.5 h-3.5' />
                        <img src={star} alt="star" className='w-3.5 h-3.5' />
                        <img src={star} alt="star" className='w-3.5 h-3.5' />
                        <img src={halfStar} alt="star" className='w-3.5 h-3.5' />
                    </div>
                    <p className='text-xs font-normal'>{productDetails?.description}</p>
                    <div className="size">
                        <p className='text-[#9F9F9F] text-xs mb-1'>Size</p>
                        <div className='flex gap-2 cursor-pointer'>
                            <div onClick={()=>setSelectedSize("small")} className={`text-sm 
                            ${selectedSize === "small"?"bg-[#B88E2F] text-white":"bg-[#F9F1E7]"}  px-2 rounded`}>S</div>
                            <div onClick={()=>setSelectedSize("large")} className={`text-sm  ${selectedSize === "large"?"bg-[#B88E2F] text-white":"bg-[#F9F1E7]"} px-2 rounded`}>L</div>
                            <div onClick={()=>setSelectedSize("extraLarge")} className={`text-sm  ${selectedSize === "extraLarge"?"bg-[#B88E2F] text-white":"bg-[#F9F1E7]"} px-2 rounded`}>XL</div>
                        </div>
                    </div>
                    <div className="color">
                        <p className='text-[#9F9F9F] text-xs'>Quantity</p>
                    </div>
                    <div className='flex gap-2'>
                        <input type="number" onChange={(e)=>setCount(e.target.value)} defaultValue={1} min={1} className='border-2 border-gray-200 w-16 h-10 pl-3 rounded-lg' />
                        <button onClick={() =>{hasAddCart ? handleRemoveFromCart(): handleAddToCart({...productDetails,size:selectedSize,count:count,status:"pending"})}} className='border-2 border-black h-10 py-1 text-center w-full rounded-xl'>{hasAddCart ? "Remove from":"Add to"} Cart</button>
                        {/* <button className='border-2 border-black h-10 py-1 px-6 rounded-xl'>+ Compare</button> */}
                        <button onClick={()=>navigate("/checkout",{state:{...productDetails,size:selectedSize,count:count,status:"pending"}})} className='border-2 border-black h-10 py-1 w-2/3 px-6 rounded-xl'>Buy Now</button>
                    </div>
                    <hr className='my-10 sm:my-5' />
                    <div className='flex gap-4'>
                        <p className='text-sm text-[#9F9F9F]'>SKU:</p>
                        <p className='text-sm text-[#9F9F9F]'>SS001</p>
                    </div>
                    <div className='flex gap-4'>
                        <p className='text-sm text-[#9F9F9F]'>Category:</p>
                        <p className='text-sm text-[#9F9F9F]'>Sofas</p>
                    </div>
                    <div className='flex gap-4'>
                        <p className='text-sm text-[#9F9F9F]'>Tags:</p>
                        <p className='text-sm text-[#9F9F9F]'>Sofa, Chair, Home, Shop</p>
                    </div>
                    <div className='flex gap-4'>
                        <p className='text-sm text-[#9F9F9F]'>Share:</p>
                        <img src={facebook} alt="facebook" className='w-4 h-4' />
                        <img src={linkedin} alt="linkedin" className='w-4 h-4' />
                        <img src={twitter} alt="twitter" className='w-4 h-4' />
                    </div>
                </div>
            </div>
            <div>
                <hr className='my-10 sm:my-5' />
                <div className='flex gap-4 justify-center'>
                    <button className='text-lg font-medium'>Description</button>
                    <button className='text-[#9F9F9F] text-lg font-normal'>Additional Information</button>
                    <button className='text-[#9F9F9F] text-lg font-normal'>Reviews [5]</button>
                </div>
                <div className='py-10 px-28 sm:px-5'>
                    <p className='text-xs text-[#9F9F9F] font-normal'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <br />
                    <p className='text-xs text-[#9F9F9F] font-normal'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
