
import offer2 from '../../assets/offer2.gif'
import camera from '../../assets/3.png'
import chair from '../../assets/chair2.jpg'
import soap from '../../assets/soap.jpg'
import cabinet from '../../assets/cabinet.png'
import eyeglass from '../../assets/eyeglass.png'
import dollar from '../../assets/dollar-symbol.png'
import rate from '../../assets/rate.png'
import shining from '../../assets/shning.gif'
import arrow from '../../assets/arrow-right.gif'
import './styles2.css'
const WeeklySales = () => {

   const weeklySales = [
      {
         image: chair,
         name: "Men's Facial Cream",
         oldPrice: 2222.22,
         latestPrice: 1111.11,
         stocks: 0,
         review: 71,
      },
      {
         image: cabinet,
         name: "I Phone 14 Pro Max",
         oldPrice: 2222.22,
         latestPrice: 1111.11,
         stocks: 44,
         review: 215,
      },
      {
         image: camera,
         name: "I Phone 14 Pro Max",
         oldPrice: 2222.22,
         latestPrice: 1111.11,
         stocks: 88,
         review: 10,
      },
      {
         image: eyeglass,
         name: "I Phone 14 Pro Max",
         oldPrice: 2222.22,
         latestPrice: 1111.11,
         stocks: 0,
         review: 28,
      },
      {
         image: soap,
         name: "I Phone 14 Pro Max",
         oldPrice: 2222.22,
         latestPrice: 1111.11,
         stocks: 0,
         review: 8,
      },
      {
         image: soap,
         name: "I Phone 14 Pro Max",
         oldPrice: 2222.22,
         latestPrice: 1111.11,
         stocks: 0,
         review: 8,
      }
   ]

  return (
    <div className='w-full h-[940px] bg-[#f1f2eb] centered flex-col gap-2 xl:h-[510px]'>

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

      <div className='absolute'>
         <img src={shining}/>
      </div>

      <div className='h-[140px] w-[150px] centered '>
         <img src={wk.image} className='h-[120px] w-[120px] '/>
      </div>

      <div className='w-[190px] flex flex-col h-[120px] my-auto gap-1 '>
            <h1 className='font-semibold text-[17px]'>{wk.name}</h1>
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
               <i className='w-[44%] border h-2 bg-red-500 border-black rounded'></i>
            </div>
      </div>
   </div>
   })}

</div>
    </div>
  )
}

export default WeeklySales