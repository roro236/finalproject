import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { Audio } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';
import { useContext } from 'react';
// import { cartContext } from '../context/CartContext';

export default function Products() {
  //  let{addToCart}=useContext(cartContext)
  const[ productList, setProduct]=useState([])
  async function getProducts(){
    let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products`
    );
    setProduct( data.data)
  }
//   async function addToMyCart(id){
//     let{data}= await addToCart(id)
// console.log(data)
//   }
  useEffect(()=>{
    getProducts()
  },[] )
  return(
    <div className='row'>
      {productList.length >0 ?<> 
       {
        productList.map((product)=>{
          return <div className='col-md-3' key={product._id}>
  <div className='product p-5'>
    <Link to={`/Details/${product._id}`} className='  text-muted'><img src={product.imageCover} alt={product.title} className='w-100' />
    <p className="text-main">{ product.category.name}</p>
    <h6> {product.title}</h6>
    <div className=' d-flex justify-content-between'>
      <p>{product.price} L.D </p>
      <p>{product.ratingsAverage}<i className='fa-solid fa-star rating-color'></i></p>
    </div></Link>
    
    <button  className='btn bg-main text-light w-100 '
    >
       {/* onClick={()=>{addToMyCart(product._id)}} */}
    <i className="fa-solid fa-cart-plus fa-xl ms-3 position-absolute start-0 top-50 bottom-50"></i>add to Cart
    </button>
  </div>
          </div>
        })
      }</>
     : 
     <div className='vh-100 d-flex justify-content-center align-items-center'>
      <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
 </div>
      
      }
       </div>
  ) 
}
