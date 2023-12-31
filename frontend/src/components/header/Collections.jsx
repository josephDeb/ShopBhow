import check from '../../assets/firework.gif'
import arrow from '../../assets/arrow-right.gif'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { ShopContext } from './context/ShopContextProvider';
import { Link } from 'react-router-dom';


const Collections = () => {
  axios.defaults.withCredentials = true;
  const [datas, setDatas] = useState([])
  useEffect(() => {
      axios.get("api/category/categories")
      .then(res => {
          setDatas(res.data.Result)
      })
  }, [])
  const {filterItems, on} = useContext(ShopContext)
  return (
    <div className='w-full h-[260px] centered flex flex-col gap-2 xl:h-[260px] xl:gap-3'>

<div className='w-[90%] mx-auto flex items-center justify-between xl:w-full'>
         <div className='flex items-center'>
             <img src={check} className='w-10'/>
             <h1 className={`${on ? "text-white" : "text-black"} font-bold `}>Collections</h1>
         </div>

         <div className='flex items-center gap-1'>
               <img src={arrow} className='w-10 h-10 '/>
               <h1 className={`${on ? "text-white" : "text-black"} font-bold `}>View all</h1>
         </div>
      </div>

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
    className="mySwiper w-[90%] xl:w-full"
    >
        {datas.map((cl, i) => {
          return <SwiperSlide key={i} className='w-[100px] h-[180px] bg-white flex flex-col shadow-xl relative rounded-lg'>

          <img src={'../../../images/'+cl.image} className='h-full w-full rounded-lg object-cover'/>

          <Link to={'/home/all-products'} onClick={() => filterItems(cl.title)} className='absolute w-full h-[53px] bg-black/80 bottom-0 rounded-lg centered px-1'>
              <h1 className='text-white font-bold manjari'>{cl.title}</h1>
          </Link>
         </SwiperSlide>
        })}
    </Swiper>

    </div>
  )
}

export default Collections