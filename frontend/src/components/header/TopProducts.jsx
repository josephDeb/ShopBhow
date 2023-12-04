
import sale from '../../assets/premium.gif'
import rate from '../../assets/rate.png'
import heart from '../../assets/heart.gif'
import top from '../../assets/top.gif'
import cart from '../../assets/shopping-cart.gif'
import arrow from '../../assets/arrow-right.gif'
import './styles2.css'
import { useContext} from 'react'
import { Link } from 'react-router-dom'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { ShopContext } from './context/ShopContextProvider'


const TopProducts = () => {
   const {products} = useContext(ShopContext)
   
   const {addCart} = useContext(ShopContext)


  return (
    <div className='w-full h-[440px] flex flex-col gap-2 xl:h-[400px]'>
      <div className='w-[90%] mx-auto flex items-center justify-between xl:w-full'>
         <div className='flex items-center'>
             <img src={top} className='w-10'/>
             <h1 className='font-bold '>Top products</h1>
         </div>

         <div className='flex items-center gap-1'>
               <img src={arrow} className='w-10 h-10 '/>
               <Link to={'/home/all-products'} className='font-bold '>View all</Link>
         </div>
      </div>

         <Swiper
         breakpoints={{
            320: {slidesPerView: 2, spaceBetween: 8},
            640:{slidesPerView: 4, spaceBetween: 17},
            1260:{slidesPerView:5, spaceBetween: 17},
          }}
          spaceBetween={8}
          autoplay={true}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper w-[90%] xl:w-full xl:h-[330px] xl:block"
         >

            {products.map((tp, i) => {
               return <SwiperSlide key={i} className="h-[320px] bg-white  rounded-lg relative">
               <Link to={`/home/${tp._id}`} className='w-full h-[197px] end '>
                  <img className='w-[170px] mx-auto h-[170px] ' src={'../../../images/'+tp.image}/>
               </Link>

               <div className=' w-full px-2 '>
                   <h1 className='font-semibold elps text-[16px]'>{tp.name}</h1>
                   <div className='flex gap-2'>
                      <p className='text-[14px]'>${tp.price}</p> <p className='line-through text-[14px] text-red-500 '>${tp.price}</p>
                   </div>
                   <div className='flex items-center gap-1'>
                       <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>({tp.stocks})</span>
                   </div>
                   <div className={`h-2 w-[${tp.stocks}%] ${tp.stocks <= 44 ? "bg-orange-500 rounded-full" : "bg-green-500"} bg-orange-500 rounded-full border border-black`}></div>

                   <div className='flex items-end gap-2 mt-1'>
                    <img src={rate} className='w-8'/>
                  <h1 className='text-sm'>({tp.stocks})</h1>
                </div>

                   <div className='absolute top-1'>
                      <img src={sale} className='w-[44px]'/>
                   </div>

                   <div className='absolute right-1 top-1'>
                      <img src={heart} className='w-[44px]'/>
                   </div>

                   <div onClick={() => addCart(tp, tp._id)} className='absolute right-3 bottom-2 cursor-pointer'>
                      <img src={cart} className='w-[44px]'/>
                   </div>
               </div>
            </SwiperSlide>
            })}
         </Swiper>


    </div>
  )
}

export default TopProducts