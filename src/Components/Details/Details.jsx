import React, { useEffect, useState } from 'react';
// import styles from './Details.module.css';
import { useParams } from 'react-router-dom';
import Products from '../Products/Products';
import  axios from 'axios';

export default function Details() {
  const[ productDetails,setDetails]=useState(null)
 let params = useParams()
 let productId=params.id 
 console.log( params.id)
 async function getProduct(){
  let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)
 console.log(data.data)
 setDetails(data.data)

}
useEffect(()=>{
getProduct()
},[]
)

  return(
<div className='container my-5'>
  <div className='row'>
    <div className='col-md-3'>
      <img className='w-100' src={productDetails?.imageCover}alt="cover" />
      </div>
      <div className="col-md-8 d-flex flex-column justify-content-around ">
                    <h3>{productDetails?.title}</h3>
                    <p className='text-muted p-2'>{productDetails?.description}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <span className='text-muted fs-4'>{productDetails?.price} L.D</span>
                        <span className='d-flex align-items-center'>
                            <i className='fas fa-star rating-color fs-4 pe-2'></i>
                            {productDetails?.ratingsAverage}
                        </span>
                    </div>
    
                    <div className='row mt-3 px-3'>
                    {/* onClick={() => addProductToCart(productDetails._id)} */}
                        <button  className='col-10 col-md-11 btn bg-main text-white px-0 position-relative'>
                            <i className="fa-solid fa-cart-plus fa-xl ms-3 position-absolute start-0 top-50 bottom-50"></i>
                            Add to Cart
                        </button>
                        </div>
  </div>
  </div>
    
  </div>
  ) 
}
