import { useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

import './styles.css'
import dlt from '../../../../assets/trash.png'
import Swal from 'sweetalert2';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import './styles.css'

import ecommerce from '../../../../assets/ecommerce.png'
import AdminMenu from '../../components/AdminMenu'


const Product = () => {
  
    const [products, setProducts] = useState([])
    useEffect(() => {
      axios.defaults.withCredentials = true;
        axios.get("/api/products")
        .then(res => {
            setProducts(res.data.Result)
        }).catch(err => console.log(err))
    }, [])


    const handleDelete = async (id) => {
      const result = await Swal.fire({
          title: "Do you really want to delete?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#ed1d24",
          confirmButtonText: "Yes, delete it!",
        })
        if(result.isConfirmed) {
          await axios.delete("/api/products/"+id)
          .then(res => {
           window.location.reload()
           console.log(res)
      }).catch(err=> console.log(err))
        }
       
  }

  return (
   <>
      <div className="container w-full manjari">
        <div className="flex flex-col  md:flex-row ">
          <div className="p-3">
            <div className="ml-[2rem] text-xl font-bold h-12 text-white">
              All Products ({products.length})
            </div>

            <Swiper
            breakpoints={{
                320: {slidesPerView: 3, spaceBetween: 8},
                640:{slidesPerView: 4, spaceBetween: 8},
                1260:{slidesPerView:4, spaceBetween: 8},
              }}
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper h-[600px] w-[710px]"
            >

                {products.map((prd, i) => {
                    return <SwiperSlide key={i} className='flex border-b h-[132px] justify-start items-center w-full'>
                <div className='h-[128px] centered w-[170px] '>
                    <img src={'../../../../../images/'+prd.image} className='h-[107px] mx-auto'/>
               </div>

                    <div className='h-[90%] my-auto w-[88%] flex flex-col justify-between '>
                      <div className='w-full flex flex-col '>
                        <div className="flex justify-between ">
                        <h5 className="text-[15px] font-semibold w-[350px] elpstext2">
                          {prd?.name}
                        </h5>

                        <p className="text-gray-400 text-xs">
                          {moment(prd.createdAt).format("MMMM Do YYYY")}
                        </p>
                        </div>
                      
                        <div className='flex '>
                           <p className="text-gray-400 xl:w-[30rem] lg:w-[100%] xl:h-[44px] md:w-[20rem] sm:w-[10rem] text-[11px] elpstext">
                          {prd?.description?.substring(0, 160)}...
                           </p>
                         </div>
                      </div>

                          <div className='flex justify-start items-center gap-3  h-[36px] '>
                             <img onClick={() => handleDelete(prd._id)} src={dlt} className='w-6 cursor-pointer shadow-xl'/>
                             <Link
                          to={`/admin-dashboard/products/update/${prd._id}`}
                          className="inline-flex items-center px-3  text-sm font-medium text-center text-white bg-pink-700 py-2 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 w-[172px]"
                        >
                          Update Product
                          <svg
                            className="w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                             </Link>
                          </div>
                    </div>
                    </SwiperSlide>
                })}

            </Swiper>

          </div>
          <div className="md:w-1/4 p-3 mt-2">
            <AdminMenu />
          </div>
        </div>
      </div>

      <div className='absolute right-[44px] top-[88px]'>
         <img src={ecommerce} className='w-full'/>
       </div>
   </>
  )
}

export default Product