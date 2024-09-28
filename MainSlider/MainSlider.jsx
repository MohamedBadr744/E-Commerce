import Slider from "react-slick";
import img_1 from '../../assets/11.jpg'
import img_2 from "../../assets/14.jpg"
import img_3 from "../../assets/15.jpg"
import { useState } from 'react';
import { useEffect } from 'react';
function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  return (

    <div className='grid md:grid-cols-12 py-3'>
      <div className=' md:col-span-8  bg-red-400'>
        <Slider {...settings}>
          <img src={img_1} className=' h-[200px] w-full object-cover' alt='' />
          <img src={img_2} className=' h-[200px] w-full object-cover' alt='' />
          <img src={img_3} className=' h-[200px] w-full object-cover' alt='' />
        </Slider>
      </div>
      <div className=' md:col-span-4  bg-sky-600'>
        <img src={img_2} className='w-full h-[300px] object-cover' />
        <img src={img_3} className='w-full object-cover h-[300px]' />
      </div>
    </div>


  );
}

export default MainSlider;