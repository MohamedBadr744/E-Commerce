import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa'
import axios from 'axios';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { CartContext } from '../../context/CartContext';
function RecentProduct() {
  const { AddItemToCart, setCartI } = useContext(CartContext)
  async function add(id) {
    const res = await AddItemToCart(id)
    console.log(res);
    if (res.data.status == "success") {
      setCartI(res.data.numOfCartItems)
      toast.success('added now',
        {
          style: { backgroundColor: "green", color: "white" }
        })
    }

  }

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
              </div>   </div>
          </Link>
          <button onClick={() => add(p._id)} >AddToCart</button>
        </div>


      )}
    </div >


  );
}
RecentProduct.propTypes = {
  children: PropTypes.node, // PropTypes.node can be anything that can be rendered: numbers, strings, elements, or an array (or fragment) containing these types
  data: PropTypes.string // Example of another prop type
};
export default RecentProduct;




// const { data: products, isloading, error, iserror } = useQuery({
//   queryKey: 'cat',
//   queryFn: () => axios.get("https://ecommerce.routemisr.com/api/v1/products"),
//   select: (data) => data.data.data
// })
// const [products, setproducts] = useState([]);
// const [isloading, setisloading] = useState(false)
// async function getproducts() {
//   setisloading(true)
//   const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products")
//   setproducts(data.data)
//   setisloading(false)
// }
// useEffect(() => {
//   getproducts()
// }, [])


// const { data: products, isloading, error, iserror } = useQuery({
//   queryKey: ['cat'],
//   queryFn: () => axios.get("https://ecommerce.routemisr.com/api/v1/products"),
//   select: (data) => data.data.data
// })
