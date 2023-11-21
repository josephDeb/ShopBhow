import { BsStarFill } from 'react-icons/bs'
import offer2 from '../../assets/offer2.gif'
import camera from '../../assets/3.png'
import sale from '../../assets/sale.gif'
import heart from '../../assets/heart.gif'
import cart from '../../assets/shopping-cart.gif'
import outofstock from '../../assets/out-of-stock.png'
import dollar from '../../assets/dollar-symbol.png'
import rate from '../../assets/rate.png'
import shining from '../../assets/shning.gif'
import './styles2.css'
import { useEffect, useState } from 'react'
const WeeklySales = () => {
   const stocks = 0;
   const [outOfStock, setOutOfStock] = useState(false)
   useEffect(() => {
      if(stocks === 0) {
         setOutOfStock(true)
      } else {
         setOutOfStock(false)
      }
   }, [])
  return (
    <div className='w-full h-[940px] bg-[#f1f2eb] centered flex-col gap-2'>
      <div className='w-[90%] mx-auto flex items-center gap-1'>
      <img src={offer2} className='w-10'/> <h1 className='font-bold '>Weekly sales</h1>
      </div>

<div className="w-[90%] grid grid-cols-1 gap-3">

   <div className='h-[140px] w-full bg-white shadow-xl flex rounded-lg relative'>

      <div className='absolute'></div>
         <img src={shining}/>
      </div>

      <div className='h-[140px] w-[140px] centered'>
         <img src={camera} className='h-[120px] w-[120px] '/>
      </div>

      <div className='w-[190px] flex flex-col h-[100px] my-auto mx-auto gap-2'>
            <h1 className='font-semibold text-[17px]'>Canon camera Pro HD</h1>
            <div className='flex w-full gap-1 items-center'>
               <img src={dollar} className='w-5 h-5'/>
               <h4>$1111.11</h4>
               <span className='line-through text-red-500'>$2222.22</span>
            </div>
            <div className='flex w-full gap-1 items-center'>
               <img src={rate} className='w-5 h-5'/>
               <h4>4.88</h4>
               <span>(125 reviews)</span>
            </div>
      </div>
   </div>

   <div className='h-[170px] w-full bg-red-500'>

   </div>
   <div className='h-[170px] w-full bg-red-500'>

   </div>
   <div className='h-[170px] w-full bg-red-500'>

   </div>
   <div className='h-[170px] w-full bg-red-500'>

   </div>

</div>
    </div>
  )
}

export default WeeklySales