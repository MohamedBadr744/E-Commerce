import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import Brands from './../Brands/Brands';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import { useContext } from 'react'
function Login() {
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate()
  const [ErrMsg, setErrMsg] = useState('')
  const [isloading, setisloading] = useState(false)
  const schema = yup.object().shape({

    email: yup.string().required('email is required').email('email is not valid'),
    password: yup.string().required('password is required').matches(/^[A-Z].{5,}$/, 'must be started with upper case and more than 5 chars'),


  })
  const y = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: badr,

    // validate: function (values) {
    //   let error = {}
    //   if (values.name == "") {
    //     error.name = "name is required"
    //   }
    //   else if (!/^[A-Z][a-z]{3,8}$/.test(values.name)) {
    //     error.name = "name must be start with upper case"
    //   }


    //   if (values.email == "") {
    //     error.email = "email is required"
    //   }
    //   return error

    // }
    validationSchema: schema
  })

  async function badr(values) {
    setisloading(true)
    try {
      const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      if (data.message == "success") {
        navigate('/')
        setToken(data.token);
      }
    }

    catch (error) {
      setErrMsg(error.response.data.message)
      console.log(error.response.data.message)
    }
    finally {
      setisloading(false)
    }
  }



  //  console.log(y.errors);
  // console.log(y.values);


  return (

    <div>
      <h2>Login</h2>
      <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">{ErrMsg}</div>
      <form onSubmit={y.handleSubmit} className=" mt-5 mx-auto">



        <div className="relative z-0 w-full mb-5 group">
          <input value={y.values.email} onChange={y.handleChange} onBlur={y.handleBlur} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail</label>
          {y.errors.email && y.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {y.errors.email}
          </div>
            : null}

        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input value={y.values.password} onChange={y.handleChange} onBlur={y.handleBlur} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />

          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userPassword</label>
          {y.errors.password && y.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {y.errors.password}
          </div> : null}
        </div>
        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          {isloading ? <FaSpinner className='animate-spin' /> : 'submit'}
        </button>


      </form >
    </div >
  )

}


export default Login;



