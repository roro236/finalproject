import React from 'react'
import Products from '../Products/Products';
 import SlideCategories from '../SlideCategories/SlideCategories';
import  OutSlider from '../Slider/Slider';
import Slider from 'react-slick'

export default function Home() {
  return <> <div className='container pb-5'>
 <OutSlider /> 
<div className='px-2 pt-1 pb-3'>
    <SlideCategories/>
</div>
<div className='px-2 pb-4'>
    <Products/>
</div>
</div> 
  
  </>
   
   
  
}
