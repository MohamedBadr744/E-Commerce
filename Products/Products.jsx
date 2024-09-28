import { useContext, useState, useEffect } from 'react';
import Cart from '../Cart/Cart'
import { CounterContext } from '../../context/counterContext';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
function Products() {
  const [products, setproducts] = useState([]);
  const [isloading, setisloading] = useState(false)
  async function getproducts() {
    setisloading(true)
    const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products")
    setproducts(data.data)
    setisloading(false)
  }
  useEffect(() => {
    getproducts()
  }, [])
  if (isloading) {
    return <>loading......</>
  }
  return (
    <div className=' mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6'>
      {products.map((p) =>
        <div key={p._id}  >
          <Link to={`/productDetails/${p._id}`}>
            <div className="">
              <img src={p.imageCover} alt="" />
              <p className='text-sm text-yellow-500 my-2'>{p.category.name}</p>
              <h3 className='truncate'>{p.title.split(' ').slice(0, 2).join(' ')}</h3>
              <div className='flex justify-between'>
                <h2>{p.price} EGY</h2>
                <p ><FaStar className='text-yellow-600' /></p>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );

}
export default Products;