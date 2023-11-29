
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
const WeeklySales = () => {

   const weeklySales = [
      {
         image: chair,
         name: "LYNN ACCENT CHAIR",
         oldPrice: 32250.00,
         latestPrice: 29950.00,
         stocks: 0,
         review: 71,
      },
      {
         image: cabinet,
         name: "FURNLITE - Nordic Cabinet SP081",
         oldPrice: 3500.00,
         latestPrice: 2900.00,
         stocks: 44,
         review: 215,
      },
      {
         image: camera,
         name: "Canon EOS M50 Mark II + EF-M 15-45mm IS STM KIT",
         oldPrice: 44227.85,
         latestPrice: 42198.02,
         stocks: 88,
         review: 10,
      },
      {
         image: eyeglass,
         name: "Gus -seal",
         oldPrice: 842.95,
         latestPrice: 465.44,
         stocks: 98,
         review: 28,
      },
      {
         image: soap,
         name: "AVON CARE MEN COOLING",
         oldPrice: 2222.22,
         latestPrice: 1111.11,
         stocks: 114,
         review: 8,
      },
      {
         image: ryzen5,
         name: "I Phone 14 Pro Max",
         oldPrice: 1164.35,
         latestPrice: 8079.93,
         stocks: 28,
         review: 8,
      }
   ]

  return (
    <div className='w-full h-[940px] centered flex-col gap-2 xl:h-[510px]'>

      <div className='w-[90%] mx-auto flex items-center justify-between xl:w-full'>
         <div className='flex items-center'>
             <img src={offer2} className='w-10'/>
             <h1 className='font-bold '>Weekly Sales</h1>
         </div>

         <div className='flex items-center gap-1'>
               <img src={arrow} className='w-10 h-10 '/>
               <h1 className='font-bold '>View all</h1>
         </div>
      </div>

<div className="w-[90%] grid grid-cols-1 gap-3 xl:grid-cols-2 xl:w-full">

   {weeklySales.map((wk, i) => {
      return <div key={i} className='h-[140px] w-full bg-white shadow-xl flex rounded-lg relative'>
         
         <div className='absolute flex flex-col justify-between right-2 h-full'>
           <img src={heart} className='w-12'/>
            <img src={cart} className='w-12'/>
         </div>

         {wk.stocks === 0 ? <div className='absolute h-full w-full bg-black/80 rounded-lg z-[20] centered'>
         <img src={outofstock} className='w-[22%] object-cover'/>
         </div>
         :
         <></>
         }

      <div className='absolute'>
         <img src={shining}/>
      </div>

      <div className='h-[140px] w-[150px] centered '>
         <img src={wk.image} className='h-[120px] w-[120px] '/>
      </div>

      <div className='w-[190px] flex flex-col h-[120px] my-auto gap-1 '>
            <h1 className='font-semibold text-[17px] ht4WK'>{wk.name}</h1>
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
  )
}

export default WeeklySales