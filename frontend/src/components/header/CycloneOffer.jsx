
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { MdPointOfSale } from 'react-icons/md';
import { HiShoppingCart } from 'react-icons/hi';

import { useEffect, useState } from 'react';
import axios from 'axios';
axios
const CycloneOffer = () => {
  const [data, setData] = useState([])
  useEffect(() => {
     axios.get("https://dummyjson.com/products")
     .then((result) => setData(result.data.products))
     .catch(err=>console.log(err))
    console.log(data)
  },[])

  const cartButton = 'absolute top-2 xl:top-1 right-2 bg-gradient-to-br from-cyan-700 to-blue-900 w-[35px] h-[28px] flex justify-center items-center gap-2 rounded-md xl:w-[62px] xl:h-[20px] cursor-pointer'
   
  return (
    <div className='w-full h-[280px] xl:h-[400px] '>
        <div className='xl:w-full w-[90%] mx-auto flex justify-start items-center h-[53px] gap-2'>
               <MdPointOfSale/> 
            <h1 className='font-semibold'>Cyclone offer</h1>
        </div>

        <Swiper
        breakpoints={{
          320: {slidesPerView: 3, spaceBetween: 18},
          640:{slidesPerView: 4, spaceBetween: 32},
          1260:{slidesPerView:5, spaceBetween: 32},
        }}
        spaceBetween={8}
        autoplay={true}
        freeMode={true}
        
        modules={[FreeMode, Pagination]}
        className="mySwiper w-[90%] xl:w-full"
      >
        {data.map((dt, i) => {
          return <SwiperSlide key={i} className='w-full h-[210px] xl:h-[260px]  bg-white shadow-xl rounded-lg flex justify-between items-center flex-col relative'>
          <div className='h-[140px] w-full centered'>
              <img src={dt.images[0]} className='h-[110px] w-[110px] xl:w-[150px] xl:h-[150px]'/>
          </div>
          <div className='w-full flex flex-col text-center pb-4 xl:pb-0 px-1 xl:px-0'>
          <p className='font-semibold'>${dt.price}</p>
          <p className='text-[13px] text-center'>{dt.title}</p>
          </div>
          <div className={cartButton}>         
                  <HiShoppingCart className=' text-white text-[17px] xl:text-[12px]'/>
            </div>
        </SwiperSlide>
        })}
       
      </Swiper>

    </div>
  )
}

export default CycloneOffer