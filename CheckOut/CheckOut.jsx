import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import Brands from './../Brands/Brands';
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function CheckOut() {
  const { CartId } = useParams()
  const { CheckOutSession } = useContext(CartContext)
  const [isloading, setisloading] = useState(false)
  const y = useFormik({
    initialValues: {
      "details": "",
      "phone": "",
      "city": " "
    },
    onSubmit: badr,
  }
  )
  async function badr(values) {
    const response = await CheckOutSession(CartId, values)
    console.log(response.data.session.url);
    window.location.href = response.data.session.url
  }




  return (
    <div>      <form onSubmit={y.handleSubmit} className=" mt-5 mx-auto">
      <div className="relative z-0 w-full mb-5 group">
        <input value={y.values.phone} onChange={y.handleChange} onBlur={y.handleBlur} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserPhone</label>
      </div>          <div className="relative z-0 w-full mb-5 group">
        <input value={y.values.city} onChange={y.handleChange} onBlur={y.handleBlur} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
        <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserCity</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input value={y.values.details} onChange={y.handleChange} onBlur={y.handleBlur} type="text" name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
        <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UserDetails</label>
      </div>
      <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        {isloading ? <FaSpinner className='animate-spin' /> : 'payment'}
      </button>

    </form >
    </div>
  )

}
export default CheckOut;



