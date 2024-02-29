
import React, { useEffect, useState } from 'react';
// import styles from './Categories.module.css';
import Slider from "react-slick";
import axios from 'axios';
export default function SlideCategories() {
  const[categoryList,setCategory] =useState([])
  async function getCategory(){
let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
    setCategory (data.data)
  }
  useEffect(()=>{
    getCategory()
  },)
  var settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return <>
    <div> <Slider {...settings}>
     {
       categoryList.map((category)=>{
        return <> <img src={category.image}alt="" className='w-100 'height={200} /> 
        <p> {category.name}</p></> 
      })
     }
    </Slider>
    
     </div>
  </>
}
