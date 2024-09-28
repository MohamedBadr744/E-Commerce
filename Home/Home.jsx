import axios from "axios";
import { useEffect, useState } from "react";
import MainSlider from "../MainSlider/MainSlider";
import CategorySlider from "../CategorySlider/CategorySlider";
import RecentProduct from "../RecentProduct/RecentProduct";
function Home() {
  //   const [data, setData] = useState([])
  //   async function getproducts() {
  //     const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
  //     console.log(data.data);
  //     setData(data.data);
  //   }

  //   useEffect(() => {
  //     getproducts()
  //   }, [])


  //   return (
  //     <div>
  //       <h3>home comp</h3>
  //       <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6" >
  //         {data.length == 0 ? <>loading</> :
  //           data.map(function (p) {
  //             return <>
  //               <div className="group">
  //                 <img src={p.imageCover} alt="" />
  //                 <h3 className="text-green-700 my-3">{p.title.split(' ').slice(0, 2).join(' ')}</h3>
  //                 <p className="line-clamp-3 mb-2">{p.description}</p>
  //                 <button className="group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 w-full translate-y-full bg-green-700 text-white  rounded-md opacity-0 ">AddToCart</button>
  //               </div>
  //             </>
  //           })
  //         }
  //       </div>
  //     </div>

  //   )

  // }

  return (
    <>


      <MainSlider />
      <CategorySlider />
      <RecentProduct />

    </>


  )


















}

export default Home;