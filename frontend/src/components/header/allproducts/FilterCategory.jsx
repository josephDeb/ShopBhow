/* eslint-disable react/prop-types */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {FreeMode, Pagination, Autoplay} from 'swiper/modules';
const FilterCategory = ({category}) => {
  return (
    <>
        <Swiper
        breakpoints={{
            320: {slidesPerView: 3, spaceBetween: 8},
            640:{slidesPerView: 4, spaceBetween: 32},
            1260:{slidesPerView:5, spaceBetween: 32},
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          spaceBetween={8}
          freeMode={true}
          modules={[FreeMode, Pagination, Autoplay]}
        className='mySwiper w-[92%]'
        >
            {category.map((ct, i) => {
                return <SwiperSlide key={i} className=' text-center h-[53px] w-full mx-auto centered gap-2 rounded-lg bg-[#ffffff]'>
                    <img src={'../../../../images/'+ct.image} className='w-10 h-10 rounded-xl object-cover'/>
                    <button className=' h-full'>{ct.title}</button>
                </SwiperSlide>
            })}
        </Swiper>
    </>
  )
}

export default FilterCategory