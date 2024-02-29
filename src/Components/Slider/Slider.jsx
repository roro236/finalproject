// import React from 'react';
// // import styles from './Slider.module.css';
// import { Axios } from 'axios';
// import Slider from 'react-slick';
// import imdSlider1  from './Assets/images/slider-2.jpeg';
// import imdSlider2  from './Assets/images/grocery-banner-2.jpeg';
// import imdSlider3  from './Assets/images/grocery-banner.png';
// import imdSlider4  from './Assets/images/slider-image-2.jpeg';
// import imdSlider5  from './Assets/images/slider-image-3.jpeg';
// export default function  HomeSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return(
//     <div class='row'>
      
//           <div className='col-md-8 g-0'>
//           <Slider {...settings}>
    
//       <img src={imdSlider3} className="w-100" alt='imgslider' height={500}/> 
//       <img src={imdSlider4} className="w-100" alt='imgslider' height={500}/> 
//       <img src={imdSlider5} className="w-100" alt='imgslider' height={500}/> 
     
//     </Slider>
          
//             </div>  
//           <div className='col-md-4'>
//           <img src={imdSlider1} className="w-100" alt='imgslider' height={250}/> 
//           <img src={imdSlider2} className="w-100" alt='imgslider' height={250}/> 
          
//           </div>
//     </div>
//   )
// }

import React from 'react'
// import styles from './MainSlider.module.css'

import slide_1 from '../../Assets/images/slider-image-1.jpeg'
import slide_2 from '../../Assets/images/slider-image-2.jpeg'
import slide_3 from '../../Assets/images/slider-image-3.jpeg'
import slide_4 from '../../Assets/images/banner-4.jpeg'
import Slider from 'react-slick'

export default function OutSlider() {
    const settings = {
        dots: true,
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }

    return <>
        <div className="row g-0 mb-5">
            <div className="col-md-9">
            <Slider {...settings} >
                <img height={400} className='w-100 main-img-slide' src={slide_1} alt="" />
                <img height={400} className='w-100 main-img-slide' src={slide_2} alt="" />
                <img height={400} className='w-100 main-img-slide' src={slide_3} alt="" />
            </Slider>
            </div>
            <div className="col-md-3 d-none d-md-block">
                <img height={200} className='w-100' src={slide_1} alt="" />
                <img height={200} className='w-100' src={slide_4} alt="" />
            </div>
        </div>
    </>
}

