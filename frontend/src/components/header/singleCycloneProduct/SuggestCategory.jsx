
/* eslint-disable react/prop-types */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {FreeMode, Pagination, Autoplay, Scrollbar} from 'swiper/modules';

import { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'
import {useNavigate} from 'react-router-dom'
const SuggestCategory = () => {
    const {category, filterItems, } = useContext(ShopContext)
    const navigate = useNavigate()
  return (
    <>
        <Swiper
        breakpoints={{
            320: {slidesPerView: 3, spaceBetween: 8},
            640:{slidesPerView: 4, spaceBetween: 32},
            1260:{slidesPerView:6, spaceBetween: 28},
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          spaceBetween={8}
          scrollbar={{
            draggable: true
          }}
          freeMode={true}
          modules={[FreeMode, Pagination, Autoplay, Scrollbar]}
        className='mySwiper w-[100%] xl:w-full h-[62px] xl:pt-0 pt-2 xl:h-[71px] '
        >
            {category.map((ct, i) => {

                return <SwiperSlide onClick={() => navigate("/home/all-products")} key={i} className=' text-center h-[53px] w-full mx-auto centered gap-2 rounded-lg hover:bg-[#F2C100] px-2 shadow-lg bg-[#f1f2eb] border-b-2 border-r-2 border-black'>
                    <img src={'../../../../images/'+ct.image} className='w-10 h-10 rounded-xl object-cover'/>
                    <button key={i} onClick={() => filterItems(ct.title)} className=' h-full ht4 w-[100px] text-start'>{ct.title}</button>
                </SwiperSlide>
            })}
        </Swiper>
    </>
  )
}

export default SuggestCategory