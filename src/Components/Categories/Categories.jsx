// import React, { useEffect, useState } from 'react';
// // import styles from './Categories.module.css';
// import Slider from "react-slick";
// import axios from 'axios';
// export default function Categories() {
//   const[categoryList,setCategory] =useState([])
//   async function getCategory(){
// let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
//     setCategory (data.data)
//   }
//   useEffect(()=>{
//     getCategory()
//   },)
//   var settings = {

//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1
//   };
//   return <>
//     <div> <Slider {...settings}>
//      {
//        categoryList.map((category)=>{
//         return <> <img src={category.image}alt="" className='w-100 'height={200} /> 
//         <p> {category.name}</p></> 
//       })
//      }
//     </Slider>
    
//      </div>
//   </>
// }

import React, { useEffect, useState } from 'react';
// import styles from './Categories.module.css';
// import Slider from "react-slick";
import axios from 'axios';
export default function Categories() {
  const[categoryList,setCategory] =useState([])
  async function getCategory(){
let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
    setCategory (data.data)
  }
  useEffect(()=>{
    getCategory()
  },)
  // var settings = {

  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1
  // };
  return <div >
    <div className='row d-flex justify-content-evenly mt-4  ' > 
     {
       categoryList.map((category)=>{
        return<div  className='   mt-4 col-md-3  mx-3 card d-flex justify-content-center card '>
          <img className='w-100 pt-2' src={category.image} height={200} alt="" />
                <h1 className='ms-2 text-center text-main'>{category.name}</h1>
          </div>
            
         
              
        
            
       
        
      })
     }
  
    
     </div>
  </div>
}