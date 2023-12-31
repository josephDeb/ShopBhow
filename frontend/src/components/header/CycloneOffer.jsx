
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

import offer from '../../assets/offer.gif'
import sale from '../../assets/sale.gif'
import { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ShopContext } from './context/ShopContextProvider';
const CycloneOffer = () => {

  const {on} = useContext(ShopContext)

  axios.defaults.withCredentials = true

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json => setProducts(json))
  }, [])



  return (
    <div className='xl:max-w-screen-lg w-full h-[280px] xl:h-[260px]   rounded-lg'>
   <div className='xl:w-full w-[90%] mx-auto flex justify-start items-center h-[53px] '>
               <img src={offer} className='w-10'/>
            <h1 className={`${on ? "text-white" : "text-black"} font-semibold`}>Cyclone offer</h1>
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
        className="mySwiper w-[90%] xl:w-full"
      >

        {products.map((pr, i) => {
          return <SwiperSlide key={i} className='w-full h-[190px] bg-white flex flex-col relative rounded-lg justify-between py-2 shadow-xl'>

            <div className='absolute top-1'>
                <img src={sale} className='w-[35px]'/>
            </div>

          <Link to={`/home/offer/${pr.id}`} className='h-[100px] w-full end'>
          <img src={pr.image} className='w-[80px] h-[80px] mx-auto '/>
          </Link>

          <div className='w-full h-[71px] flex flex-col  justify-end px-2'>
              <p className='text-[15px] ht4 font-semibold xl:w-[124px] w-[88px]'>{pr.title}</p>
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