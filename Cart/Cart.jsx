import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useEffect, useState } from 'react';
import { FaTrash } from "react-icons/fa"
import Cartitem from '../Cartitem/Cartitem';
import { Link } from 'react-router-dom';

function Cart() {
  const [Cartdetails, setCartdetails] = useState(null)
  const { UserCart, UpdateCountItem, DeleteCountItem } = useContext(CartContext)
  async function LoggedUser() {
    const respo = await UserCart();
    console.log(respo);
    if (respo.data.status == "success") {
      setCartdetails(respo.data.data)
      console.log(Cartdetails);
    }
  }
  async function UpdateQun(id, count) {
    const respo = await UpdateCountItem(id, count);
    console.log(respo);
    if (respo.data.status == "success") {
      setCartdetails(respo.data.data)
      console.log(Cartdetails);
    }

  }
  async function DeleteQun(id) {
    const respo = await DeleteCountItem(id);
    console.log(respo);
    if (respo.data.status == "success") {
      setCartdetails(respo.data.data)
      console.log(Cartdetails);
    }

  }


  useEffect(() => { LoggedUser() }, [])

  return (


    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className='flex justify-between mb-3 items-center'>

        <p className='h3 text-green-500'>total price{Cartdetails?.totalCartPrice}</p>
        <button>clear cart <FaTrash className='inline-block' /></button>
      </div>


      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {

            Cartdetails?.products.map(p => <Cartitem DeleteQun={DeleteQun} UpdateQun={UpdateQun} count={p.count} price={p.price} product={p.product} key={p._id} />)



          }
        </tbody>
        <Link to={'/CheckOut/' + Cartdetails?._id} type="button" className='btn btn-red bg-sky-700 text-[red] w-full block text-center'>CheckOut</Link>
      </table>
    </div>
  );

}


export default Cart;

