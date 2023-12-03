/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import QuantityBtn from './QuantityBtn';
import { HiX } from 'react-icons/hi';
import FooterBar from '../../../pages/FooterBar';
import {useNavigate} from 'react-router-dom'
const CartDetails = () => {
    const {cart, removeCart, total, clearCart} = useContext(ShopContext)
    const navigate = useNavigate()
  return (
    <>
      <div className='w-full flex xl:flex-row flex-col manjari  gap-[88px] xl:gap-0'>
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
              className="mySwiper w-[90%] xl:px-8 xl:h-[800px] h-[530px] mt-5"
            >
             {cart.map((ct, i) => {
              const totals = ct.amount * ct.price
                return <SwiperSlide key={i} className='h-[140px] w-full bg-white rounded-xl flex relative border-2 justify-between items-center'>
                    <div className='flex justify-center items-center'>
                      <div className='xl:w-[134px] h-full centered w-[88px]'>
                        <img src={'../../../../images/'+ct.image} className='xl:w-[107px] xl:h-[107px] w-[88px] h-[88px]'/>
                       </div>

                        <div className='flex flex-col w-[110px] xl:w-[240px]'>
                          <h1 className='xl:text-[22px] text-[14px] font-bold elpstext'>{ct.name}</h1>
                         <h2 className='xl:text-[17px] text-[12px]'>TYPE: {ct.category}</h2>
                           <h4 className='xl:text-[17px]  text-[12px]'>Price: ${ct.price}<span></span></h4>
                        </div>
                    </div>
                   
                    <div className='xl:w-[180px] centered flex flex-col w-[180px]'>
                        <div className='flex flex-col justify-center items-center'>
                             <label htmlFor="quantity-input" className="block xl:mb-2 xl:text-sm font-medium text-gray-900 dark:text-black text-[11px]">Choose quantity:</label>
                             <QuantityBtn id={ct._id} amount={ct.amount} ct={ct}/>
                        </div>

                      <div className=' xl:w-[107px] centered text-[14px] xl:text-[18px] flex flex-col mt-2'>
                        <h2>Total: </h2>
                        <h1 className='text-[17px]'>${totals.toFixed(2)}</h1>
                      </div>

                      <HiX onClick={() => removeCart(ct._id)} className='absolute top-2 right-2 text-red-500 hover:text-red-400 cursor-pointer'/>
                    </div>
                </SwiperSlide>
            })}
            </Swiper>
        </div>

        <div className='xl:w-[260px] h-full bg-white rounded-xl w-[90%] mx-auto xl:mx-0 xl:mt-[71px] border-2'>
            <div className='h-[220px] flex flex-col w-full items-center justify-center gap-4'>
                <div className='w-[88%] flex flex-col'>
                    <h1 className='text-[14px]'>Subtotal: <span>{total}</span></h1>
                    <h1 className='text-2xl'>Total: <span>{total}</span></h1>
                </div>
              <div className='flex w-[88%] gap-4'>
                  <button onClick={() => clearCart()} className='w-[170px] bg-yellow-600 text-white h-[44px]'>Clear cart</button>
                  <button onClick={() => navigate("/home/payment")} className='border-2 bg-green-600 text-white h-[44px] w-[260px] centered'>Check out</button>
              </div>
            </div>
        </div>
      </div>

      <div className='xl:hidden h-[108px] w-full'>
        {/*Just for space */}
      </div>

      <div className='fixed z-[88] w-full -bottom-1 h-[62px] shadow-2xl '>
             <FooterBar />
        </div>
    </>
  )
}

export default CartDetails