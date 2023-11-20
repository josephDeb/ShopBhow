
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

  const cartButton = 'absolute top-2 xl:top-1 right-2 bg-gradient-to-br from-red-700 to-rose-900 w-[44px] h-[28px] flex justify-center items-center gap-2 rounded-md xl:w-[62px] xl:h-[20px] cursor-pointer text-white'

  const [products, setProducts] = useState([])
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
  .then(res=> {
    setProducts(res.data)
  })
  .then(json=>console.log(json))
  }, [])

  return (
    <div className='xl:max-w-screen-lg w-full h-[280px] xl:h-[400px] bg-[#f1f2ed]'>
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

        {products.map((pr, i) => {
          return <SwiperSlide key={i} className='h-[170px] w-[140px] bg-white rounded-lg shadow-xl'>
            <div className='w-full h-full centered'>
              <span className={cartButton}>
                  <HiShoppingCart />
              </span>
              <img src={pr.image} className='w-[88px] h-[100px]'/>

            </div>
        </SwiperSlide>
        })}
        
      </Swiper>

    </div>
  )
}

export default CycloneOffer