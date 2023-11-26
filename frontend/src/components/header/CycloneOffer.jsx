
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

import offer from '../../assets/offer.gif'

import { useEffect, useState } from 'react';
import axios from 'axios';
axios
const CycloneOffer = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res=> {
      setProducts(res.data)

    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div className='xl:max-w-screen-lg w-full h-[280px] xl:h-[400px] bg-[#f1f2ed]'>
        <div className='xl:w-full w-[90%] mx-auto flex justify-start items-center h-[53px] '>
               <img src={offer} className='w-10'/>
            <h1 className='font-semibold'>Cyclone offer</h1>
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

        {products.map((pr, i) => {
          return <SwiperSlide key={i} className='w-full h-[180px] bg-white flex flex-col shadow-xl relative rounded-lg'>

          <div className='h-[92px] w-full end '>
          <img src={pr.image} className='w-[80px] h-[80px] mx-auto '/>
          </div>

          <div className='w-full h-[80px] flex flex-col  justify-end px-1'>
              <p className='text-[15px] ht4 font-semibold'>{pr.title}</p>
              <h4 className='text-[13px]'>${pr.price}</h4>
              <div className='flex items-center text-[13px] gap-1 text-gray-500'>
                 <h3>Stocks</h3><span>({pr.rating.count})</span>
              </div>
              <i className='h-2 w-[71%] bg-green-500 rounded-full border border-black'></i>
          </div>
      </SwiperSlide>
        })}

      </Swiper>

    </div>
  )
}

export default CycloneOffer