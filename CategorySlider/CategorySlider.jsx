import Slider from "react-slick";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
function CategorySlider() {
  const [categoryprod, setcategoryprod] = useState([])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrow: false
  };
  async function categories() {
    const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    console.log(data);

    setcategoryprod(data.data)
  }

  useEffect(() => { categories() }, [])
  if (categoryprod.length === 0)
    return <h2>loading.......</h2>

  return (
    <Slider {...settings}>
      {categoryprod.map((c) => <div key={c._id}>
        <img className="h-[200px] w-full object-cover" src={c.image} alt="" />
        <h3 className="font-sm mb-3">{c.name}</h3>



      </div>)}
      <div>

      </div>

    </Slider>


  );
}

export default CategorySlider;