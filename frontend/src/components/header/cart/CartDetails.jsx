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
    <div className='w-full flex xl:flex-row flex-col manjari '>
        <div className='xl:w-[730px] flex flex-col xl:h-[134vh] gap-2 '>
            <div className='w-full  h-[44px] px-8 flex items-end'>
                <div className='w-full  uppercase flex items-end border-b'>
                   <h1 className='pl-1 w-[330px] '>Product</h1>

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
              className="mySwiper w-[90%] xl:px-8 xl:h-[800px] h-[440px] mt-5 "
            >
             {cart.map((ct, i) => {
                return <SwiperSlide key={i} className='h-[120px] w-full bg-white rounded-xl flex '>
                    <div className='xl:w-[134px] h-full centered'>
                        <img src={'../../../../images/'+ct.image} className='xl:w-[107px] xl:h-[107px] w-[88px] h-[88px]'/>
                    </div>
                    <div className='xl:w-[260px] xl:h-[88%] flex flex-col my-auto  justify-center w-[141px] pl-2 '>
                        <h1 className='xl:text-[22px] text-[11px] font-bold elps1'>{ct.name}</h1>
                        <h2 className='xl:text-[17px] text-[10px]'>TYPE: {ct.category}</h2>
                        <h4 className='xl:text-[17px] mt-2'>Price: ${ct.price}<span></span></h4>
                    </div>
                   
                    <div className='xl:w-[180px] centered flex flex-col w-[120px]'>
                        <div className='flex flex-col justify-center items-center'>
                             <label htmlFor="quantity-input" className="block xl:mb-2 xl:text-sm font-medium text-gray-900 dark:text-black text-[11px]">Choose quantity:</label>
                             <QuantityBtn />
                        </div>
                      <div className=' xl:w-[107px] centered text-[11px] xl:text-[18px] mt-4 gap-2'>
                        <h2>Total: </h2>
                        <h1>$680.96</h1>
                     </div>
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