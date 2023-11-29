
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

import offer from '../../assets/offer.gif'
import sale from '../../assets/sale.gif'
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
    <div className='xl:max-w-screen-lg w-full h-[280px] xl:h-[260px]   rounded-lg'>
        <div className='xl:w-full w-[90%] mx-auto flex justify-start items-center h-[53px] '>
               <img src={offer} className='w-10'/>
            <h1 className='font-semibold'>Cyclone offer</h1>
        </div>

        <Swiper
        breakpoints={{
          320: {slidesPerView: 3, spaceBetween: 12},
          640:{slidesPerView: 4, spaceBetween: 32},
          1260:{slidesPerView: 6, spaceBetween: 17},
        }}
        spaceBetween={8}
        autoplay={true}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-[90%] xl:w-full bg-[#f1f2eb]"
      >

        {products.map((pr, i) => {
          return <SwiperSlide key={i} className='w-full h-[190px] bg-white flex flex-col relative rounded-lg justify-between py-2'>

            <div className='absolute top-1'>
                <img src={sale} className='w-[35px]'/>
            </div>

          <div className='h-[100px] w-full end'>
          <img src={pr.image} className='w-[80px] h-[80px] mx-auto '/>
          </div>

          <div className='w-full h-[71px] flex flex-col  justify-end px-2'>
              <p className='text-[15px] ht4 font-semibold xl:w-[144px] w-[88px]'>{pr.title}</p>
              <h4 className='text-[13px]'>${pr.price}</h4>
              <div className='flex items-center text-[13px] gap-1 text-gray-500'>
                 <h3>Stocks</h3><span>({pr.rating.count})</span>
              </div>
          </div>
      </SwiperSlide>
        })}

      </Swiper>

    </div>
  )
}

export default CycloneOffer