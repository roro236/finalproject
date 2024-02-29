
import axios from 'axios';
import React from 'react';
// import styles from './brands.module.css';
import { useQuery } from 'react-query';
import { Audio } from 'react-loader-spinner';
export default function Brands() {

  async function getBrands() {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
            // if (res?.data != null) {
            //     setBrand(res?.data?.data);
            // }
            // setIsLoading(false);
        }
    let {data,isLoading,isFetching}= useQuery('brands',getBrands ,{cacheTime:3000 ,refetchInterval:3000})
    // console.log( data?.data.data)
    console.log(' isFetching',isFetching)
    console.log( 'isLoading',isLoading)
  
  return (<div className='row'>
  
    {
    !isLoading?
    <>
    {
      data?.data.data.map((brands)=>{

return <> 
   <div className=' mt-4 col-md-3
     mx-3 card d-flex justify-content-center' key={brands._id}>
    <img className='w-100 pt-2' src={brands.image} alt={brands.name} />
    <h1 className='ms-2 text-center'>{brands.name}</h1>
    </div>
    </>



})}
</>
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
</div> }
  </div>
  )
}
