import axios from 'axios'
import { CartContext } from '../../context/CartContext';
import { useState, useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
function ProductDetails() {
  const { AddItemToCart, setCartI } = useContext(CartContext)
  async function add(id) {
    const res = await AddItemToCart(id)
    console.log(res);
    if (res.data.status == "success") {
      alert('added')
      setCartI(res.data.numOfCartItems)
    }

  }



  const { id } = useParams()
  const [market, setmarket] = useState(null)
  async function getProductDetails(id) {
    const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products/' + id)
    setmarket(data.data)
  }

  useEffect(() => { getProductDetails(id) }, [])
  if (market == null) {
    return <>loading......</>
  }
  return (
    <div className=' grid sm:grid-cols-12'>
      <div className='col-span-4  py-5'>
        <img src={market.imageCover} className='w-full' />
      </div>
      <div className='col-span-8  py-5 self-center'>
        <h3>{market.title}</h3>
        <p className='my-3'>{market.description}</p>
        <h2 className='mb-2'>{market.category.name}</h2>
        <div className="">
          <p className='text-sm text-yellow-500 my-2'>{market.category.name}</p>
          <h3 className='truncate'>{market.title.split(' ').slice(0, 2).join(' ')}</h3>
          <div className='flex justify-between'>
            <h2>{market.price} EGY</h2>
            <p ><FaStar className='text-yellow-600' /></p>
          </div>

          <button onClick={() => add(market.id)} className='w-full bg-green-400 py-1 text-white rounded-sm'>AddToCart</button>
        </div>
      </div>
    </div>
  )


}

export default ProductDetails;