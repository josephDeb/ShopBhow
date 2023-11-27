import { BsStarFill } from 'react-icons/bs'
import phone from '../../assets/1.png'
import tshirt from '../../assets/123.png'
import cream from '../../assets/cream.webp'
import lamp from '../../assets/6.png'
import sale from '../../assets/sale.gif'
import rate from '../../assets/rate.png'
import heart from '../../assets/heart.gif'
import top from '../../assets/top.gif'
import cart from '../../assets/shopping-cart.gif'
import arrow from '../../assets/arrow-right.gif'
import outofstock from '../../assets/out-of-stock.png'
import './styles2.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

const TopProducts = () => {


   const stocks = 0;
   const [outOfStock, setOutOfStock] = useState(false)
   useEffect(() => {
      if(stocks === 0) {
         setOutOfStock(true)
      } else {
         setOutOfStock(false)
      }
   }, [])

   const topProducts = [
      {
         image: cream,
         name: "Men's Facial Cream",
         oldPrice: 0,
         latestPrice: 1,
         stocks: 0,
         review: 215,
      },
      {
         image: phone,
         name: "I Phone 14 Pro Max",
         oldPrice: 0,
         latestPrice: 1,
         stocks: 44,
         review: 215,
      },
      {
         image: lamp,
         name: "I Phone 14 Pro Max",
         oldPrice: 0,
         latestPrice: 1,
         stocks: 88,
         review: 215,
      },
      {
         image: tshirt,
         name: "I Phone 14 Pro Max",
         oldPrice: 0,
         latestPrice: 1,
         stocks: 0,
         review: 215,
      },
      {
         image: tshirt,
         name: "I Phone 14 Pro Max",
         oldPrice: 0,
         latestPrice: 1,
         stocks: 0,
         review: 215,
      }
   ]

   const [xlTopProducts, setXlTopProducts] = useState([])

   useEffect(() => {
      axios.get("/api/products")
      .then(res => {
         setXlTopProducts(res.data.Result)
         console.log(xlTopProducts)
      }).catch(err => console.log(err))
   }, [])

  return (
    <div className='w-full h-[980px] bg-[#f1f2eb] flex flex-col gap-2 xl:h-[400px]'>
      <div className='w-[90%] mx-auto flex items-center justify-between xl:w-full'>
         <div className='flex items-center'>
             <img src={top} className='w-10'/>
             <h1 className='font-bold '>Top products</h1>
         </div>

         <div className='flex items-center gap-1'>
               <img src={arrow} className='w-10 h-10 '/>
               <Link to={'/home/all-products'} className='font-bold '>View all</Link>
         </div>
      </div>
         
         {/*Hidden for XL LG Devices */}
         <div className="w-[90%] grid grid-cols-2 gap-3 xl:w-full xl:grid-cols-5 xl:hidden mx-auto">

             {topProducts.map((tp, i) => {

               return <div key={i} className="h-[300px] bg-white shadow-xl rounded-lg relative flex flex-col justify-between">

               {tp.stocks === 0 ? <div className='absolute h-full w-full bg-black/80 rounded-lg z-[20] centered'>
                     <img src={outofstock} className='w-[71%]'/>
                  </div>
                  :
                  <></>
               }
   
               <div className='w-full h-[170px] end'>
                  <img className='w-[160px] mx-auto h-[160px] ' src={tp.image}/>
               </div>
   
               <div className=' w-full px-2 pb-4'>
                   <h1 className='font-semibold elps text-[16px]'>{tp.name} </h1>
                   <div className='flex gap-2'>
                      <p className='text-[14px]'>${tp.price}</p> <p className='line-through text-[14px] text-red-500 '>${tp.price}</p>
                   </div>
                   <div className='flex items-center gap-1'>
                       <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>({tp.stocks})</span>
                   </div>
                   <div className={`h-2 ${tp.stocks === 0 && "w-[0%]"} ${tp.stocks >= 44 && `w-[${tp.stocks}%]`} bg-green-500 rounded-full border border-black`}></div>
   
                   <div className='flex items-end gap-2 mt-1'>
                       <img src={rate} className='w-8'/>
                     <h1 className=''>({tp.stocks})</h1>
                   </div>
   
                   <div className='absolute top-1'>
                      <img src={sale} className='w-[44px]'/>
                   </div>
   
                   <div className='absolute right-1 top-1'>
                      <img src={heart} className='w-[44px]'/>
                   </div>
   
                   <div className='absolute right-3 bottom-2'>
                      <img src={cart} className='w-[44px]'/>
                   </div>
               </div>
            </div>
             })}

         </div>
         
         {/*For XL LG devices */}
         <Swiper
         breakpoints={{
            320: {slidesPerView: 3, spaceBetween: 8},
            640:{slidesPerView: 4, spaceBetween: 32},
            1260:{slidesPerView:5, spaceBetween: 32},
          }}
          spaceBetween={8}
          autoplay={true}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper w-[90%] xl:w-full xl:h-[330px] hidden xl:block"
         >

            {xlTopProducts.map((tp, i) => {
               return <SwiperSlide key={i} className="h-[320px] bg-white  rounded-lg relative">
               <div className='w-full h-[197px] end '>
                  <img className='w-[170px] mx-auto h-[170px] ' src={'../../../images/'+tp.image}/>
               </div>

               <div className=' w-full px-2 '>
                   <h1 className='font-semibold elps text-[16px]'>{tp.name}</h1>
                   <div className='flex gap-2'>
                      <p className='text-[14px]'>${tp.price}</p> <p className='line-through text-[14px] text-red-500 '>${tp.price}</p>
                   </div>
                   <div className='flex items-center gap-1'>
                       <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>({tp.stocks})</span>
                   </div>
                   <div className={`h-2 w-[${tp.stocks}%] ${tp.stocks <= 44 ? "bg-orange-500 rounded-full" : "bg-green-500"} bg-orange-500 rounded-full border border-black`}></div>

                   <div className='flex items-end gap-2 mt-1'>
                    <img src={rate} className='w-8'/>
                  <h1 className='text-sm'>({tp.stocks})</h1>
                </div>

                   <div className='absolute top-1'>
                      <img src={sale} className='w-[44px]'/>
                   </div>

                   <div className='absolute right-1 top-1'>
                      <img src={heart} className='w-[44px]'/>
                   </div>

                   <div className='absolute right-3 bottom-2'>
                      <img src={cart} className='w-[44px]'/>
                   </div>
               </div>
            </SwiperSlide>
            })}
         </Swiper>


    </div>
  )
}

export default TopProducts