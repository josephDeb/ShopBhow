/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import QuantityBtn from './QuantityBtn';

const CartDetails = () => {
    const {cart} = useContext(ShopContext)
    console.log(cart.name)
  return (
    <div className='w-full flex xl:flex-row flex-col manjari'>
        <div className='xl:w-[730px] flex flex-col xl:h-[140vh] gap-2'>
            <div className='w-full  h-[44px] px-8 flex items-end'>
                <div className='w-full  uppercase flex items-end border-b'>
                   <h1 className='pl-1 w-[330px] '>Product</h1>
                   <h2 className='w-[85px] '>Price</h2>
                   <h3 className=' w-[160px]'>Quantity</h3>
                   <h4>Total</h4>
                </div>
            </div>

            <Swiper
             breakpoints={{
                320: {slidesPerView: 4, spaceBetween: 12},
                640:{slidesPerView: 4, spaceBetween: 32},
                1260:{slidesPerView: 5, spaceBetween: 17},
              }}
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper w-full px-8 h-[88%]"
            >
             {cart.map((ct, i) => {
                return <SwiperSlide key={i} className='h-[120px] w-full bg-white rounded-xl flex '>
                    <div className='w-[134px] h-full centered'>
                        <img src={'../../../../images/'+ct.image} className='w-[107px] h-[107px] '/>
                    </div>
                    <div className='w-[180px] h-[88%] flex flex-col my-auto  justify-center '>
                        <h1 className='text-[17px]'>{ct.name}</h1>
                        <h2>TYPE: {ct.category}</h2>
                    </div>
                    <div className='w-[88px]  h-[88%] my-auto centered '>
                        <h4>{ct.price}</h4>
                    </div>

                    <div className='w-[150px] centered '>
                        <QuantityBtn />
                    </div>

                    <div className=' w-[107px] centered'>
                        <h1>$680.96</h1>
                    </div>
                </SwiperSlide>
            })}
            </Swiper>
            
        </div>

        <div className='xl:w-[260px] h-full bg-white mt-8 rounded-xl'>
            <div className='h-[220px] flex flex-col w-full items-center justify-center gap-4'>
                <h1 className='text-2xl'>Order information</h1>
                <button className='bg-black text-white px-8 py-2'>Continue payment</button>
            </div>
        </div>
    </div>
  )
}

export default CartDetails