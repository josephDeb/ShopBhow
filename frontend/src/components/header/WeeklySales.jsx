
import offer2 from '../../assets/offer2.gif'
import camera from '../../assets/3.png'
import chair from '../../assets/chair2.jpg'
import soap from '../../assets/soap.jpg'
import ryzen5 from '../../assets/ryzen5.png'
import cabinet from '../../assets/cabinet.png'
import eyeglass from '../../assets/eyeglass.png'
import dollar from '../../assets/dollar-symbol.png'
import rate from '../../assets/rate.png'
import shining from '../../assets/shning.gif'
import arrow from '../../assets/arrow-right.gif'
import outofstock from '../../assets/out-of-stock.png'
import './styles2.css'
import heart from '../../assets/heart.gif'
import cart from '../../assets/shopping-cart.gif'
import { useContext } from 'react'
import { ShopContext } from './context/ShopContextProvider'
import { Link, useNavigate } from 'react-router-dom'
const WeeklySales = () => {
   const {addCart, search} = useContext(ShopContext)

   const navigate = useNavigate()



  return (
    <>
<div className='w-[90%] mx-auto flex items-center justify-between xl:w-full'>
   <div className='flex items-center'>
       <img src={offer2} className='w-10'/>
       <h1 className='font-bold '>Weekly Sales</h1>
   </div>

   <Link to={"/home/all-products"} className='flex items-center gap-1'>
         <img src={arrow} className='w-10 h-10 '/>
         <h1 className='font-bold '>View all</h1>
   </Link>
</div>

<div className='w-full h-[1040px] flex-col gap-2 xl:h-[700px] overflow-hidden'>
      <div className="w-[90%] h-full grid grid-cols-1 gap-3 xl:grid-cols-2 xl:w-full mx-auto mt-2">

   {search.map((wk, i) => {
      return <div key={i} className='h-[160px] w-full bg-white shadow-xl flex rounded-lg relative'>

         <div className='absolute flex flex-col justify-between right-2 h-full'>
           <img src={heart} className='w-12'/>
            <img onClick={() => addCart(wk, wk._id)} src={cart} className='w-12'/>
         </div>

         {wk.stocks === 0 ? <div className='absolute h-full w-full bg-black/80 rounded-lg z-[20] centered'>
         <img src={outofstock} className='w-[22%] object-cover'/>
         </div>
         :
         <></>
         }

      <div onClick={() => navigate(`/home/${wk._id}`)} className='absolute'>
         <img src={shining}/>
      </div>

      <div className='h-[160px] w-[150px] centered cursor-pointer'>
         <img src={'../../../../images/'+wk.image} className='h-[120px] w-[120px] '/>
      </div>

      <div className='xl:w-[190px] flex flex-col h-[120px] my-auto gap-1 '>
            <h1 className='font-semibold text-[17px] ht4WK w-[161px]'>{wk.name}</h1>
            <div className='flex w-full gap-1 items-center'>
               <img src={dollar} className='w-5 h-5'/>
               <h4>${wk.latestPrice}</h4>
               <span className='line-through text-red-500'>${wk.oldPrice}</span>
            </div>
            <div className='flex w-full gap-1 items-center'>
               <img src={rate} className='w-5 h-5'/>
               <h4>4.88</h4>
               <span>({wk.review} reviews)</span>
            </div>
            <div className='w-full flex flex-col'>
               <h4>Stocks <span>({wk.stocks})</span></h4>
               <i className={`${wk.stocks === 0 && "w-[0%]"} ${wk.stocks >= 44 && `w-[${wk.stocks}%]`} border h-2 bg-green-500 border-black rounded`}></i>
            </div>
      </div>
   </div>
   })}

       </div>
</div>
    </>
  )
}

export default WeeklySales