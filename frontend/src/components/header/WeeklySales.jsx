
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
  return (
    <div className='w-full h-[800px] bg-[#f1f2eb] centered flex-col gap-2'>


      <div className='w-[90%] mx-auto flex items-center justify-between'>
         <div className='flex items-center'>
             <img src={offer2} className='w-10'/>
             <h1 className='font-bold '>Weekly Sales</h1>
         </div>

         <div className='flex items-center gap-1'>
               <img src={arrow} className='w-10 h-10 '/>
               <h1 className='font-bold '>View all</h1>
         </div>
      </div>

<div className="w-[90%] grid grid-cols-1 gap-3">

   <div className='h-[140px] w-full bg-white shadow-xl flex rounded-lg relative'>

      <div className='absolute'>
         <img src={shining}/>
      </div>

      <div className='h-[140px] w-[150px] centered '>
         <img src={camera} className='h-[120px] w-[120px] '/>
      </div>

      <div className='w-[190px] flex flex-col h-[120px] my-auto gap-1 '>
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
            <div className='w-full flex flex-col'>
               <h4>Stocks <span>(28)</span></h4>
               <i className='w-[44%] border h-2 bg-red-500 border-black rounded'></i>
            </div>
      </div>
   </div>

   <div className='h-[140px] w-full bg-white shadow-xl flex rounded-lg relative'>

      <div className='absolute'>
         <img src={shining}/>
      </div>

      <div className='h-[140px] w-[150px] centered '>
         <img src={chair} className='h-[120px] w-[120px] '/>
      </div>

      <div className='w-[190px] flex flex-col h-[120px] my-auto gap-1'>
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
            <div className='w-full flex flex-col'>
               <h4>Stocks <span>(28)</span></h4>
               <i className='w-[44%] border h-2 bg-red-500 border-black rounded'></i>
            </div>
      </div>
   </div>

   <div className='h-[140px] w-full bg-white shadow-xl flex rounded-lg relative'>

      <div className='absolute'>
         <img src={shining}/>
      </div>

      <div className='h-[140px] w-[150px] centered '>
         <img src={soap} className='h-[120px] w-[120px] '/>
      </div>

      <div className='w-[190px] flex flex-col h-[120px] my-auto gap-1'>
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
            <div className='w-full flex flex-col'>
               <h4>Stocks <span>(28)</span></h4>
               <i className='w-[44%] border h-2 bg-red-500 border-black rounded'></i>
            </div>
      </div>
   </div>

   <div className='h-[140px] w-full bg-white shadow-xl flex rounded-lg relative'>

      <div className='absolute'>
         <img src={shining}/>
      </div>

      <div className='h-[140px] w-[150px] centered '>
         <img src={cabinet} className='h-[120px] w-[120px] '/>
      </div>

      <div className='w-[190px] flex flex-col h-[120px] my-auto gap-1'>
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
            <div className='w-full flex flex-col'>
               <h4>Stocks <span>(28)</span></h4>
               <i className='w-[44%] border h-2 bg-red-500 border-black rounded'></i>
            </div>
      </div>
   </div>

   <div className='h-[140px] w-full bg-white shadow-xl flex rounded-lg relative'>

      <div className='absolute'>
         <img src={shining}/>
      </div>

      <div className='h-[140px] w-[150px] centered '>
         <img src={eyeglass} className='h-[120px] w-[120px] '/>
      </div>

      <div className='w-[190px] flex flex-col h-[120px] my-auto gap-1'>
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
            <div className='w-full flex flex-col'>
               <h4>Stocks <span>(28)</span></h4>
               <i className='w-[44%] border h-2 bg-red-500 border-black rounded'></i>
            </div>
      </div>
   </div>


</div>
    </div>
  )
}

export default WeeklySales