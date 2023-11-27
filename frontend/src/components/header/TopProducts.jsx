import { BsStarFill } from 'react-icons/bs'
import phone from '../../assets/1.png'
import lamp from '../../assets/6.png'
import sale from '../../assets/sale.gif'
import heart from '../../assets/heart.gif'
import top from '../../assets/top.gif'
import cart from '../../assets/shopping-cart.gif'
import arrow from '../../assets/arrow-right.gif'
import outofstock from '../../assets/out-of-stock.png'
import './styles2.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TopProducts = () => {


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
    <div className='w-full h-[980px] bg-[#f1f2eb] centered flex-col gap-2'>
      <div className='w-[90%] mx-auto flex items-center justify-between'>
         <div className='flex items-center'>
             <img src={top} className='w-10'/>
             <h1 className='font-bold '>Top products</h1>
         </div>

         <div className='flex items-center gap-1'>
               <img src={arrow} className='w-10 h-10 '/>
               <Link to={'/home/all-products'} className='font-bold '>View all</Link>
         </div>
      </div>

         <div className="w-[90%] grid grid-cols-2 gap-3">

             <div className="h-[300px] bg-white shadow-xl rounded-lg relative">
                <div className='w-full h-[197px] end '>
                   <img className='w-[170px] mx-auto h-[170px] ' src={lamp}/>
                </div>

                <div className=' w-full px-2 '>
                    <h1 className='font-semibold elps text-[16px]'>Iphone 13 Pro Max </h1>
                    <div className='flex gap-2'>
                       <p className='text-[14px]'>$00.00</p> <p className='line-through text-[14px] text-red-500 '>$00.00</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>(44)</span>
                    </div>
                    <div className='h-2 w-[35%] bg-orange-500 rounded-full border border-black'></div>
                    <div className='flex gap-1'>
                        <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                    </div>

                    <div className='absolute top-1'>
                       <img src={sale} className='w-[44px]'/>
                    </div>

                    <div className='absolute right-1 top-1'>
                       <img src={heart} className='w-[44px]'/>
                    </div>

                    <div className='absolute right-3 bottom-2'>
                       <img src={cart} className='w-[44px]'/>
                    </div>
                </div>
             </div>

             <div className="h-[300px] bg-white shadow-xl rounded-lg relative">
                <div className='w-full h-[197px] end '>
                   <img className='w-[170px] mx-auto h-[170px]' src={phone}/>
                </div>

                <div className=' w-full px-2 '>
                    <h1 className='font-semibold elps text-[16px]'>Iphone 13 Pro Max </h1>
                    <div className='flex gap-2'>
                       <p className='text-[14px]'>$00.00</p> <p className='line-through text-[14px] text-red-500 '>$00.00</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>(422)</span>
                    </div>
                    <div className='h-2 w-[71%] bg-green-500 rounded-full border border-black'></div>
                    <div className='flex gap-1'>
                        <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                    </div>

                    <div className='absolute top-1'>
                       <img src={sale} className='w-[44px]'/>
                    </div>

                    <div className='absolute right-1 top-1'>
                       <img src={heart} className='w-[44px]'/>
                    </div>

                    <div className='absolute right-3 bottom-2'>
                       <img src={cart} className='w-[44px]'/>
                    </div>
                </div>
             </div>

             <div className="h-[300px] bg-white shadow-xl rounded-lg relative">
             {outOfStock ? <div className='absolute h-full w-full bg-black/80 rounded-lg z-[20] centered'>
                  <img src={outofstock} className='w-[71%]'/>
               </div>
               :
               <></>
            }
                <div className='w-full h-[197px] end '>
                   <img className='w-[170px] mx-auto h-[170px]' src={phone}/>
                </div>

                <div className=' w-full px-2 '>
                    <h1 className='font-semibold elps text-[16px]'>Iphone 13 Pro Max </h1>
                    <div className='flex gap-2'>
                       <p className='text-[14px]'>$00.00</p> <p className='line-through text-[14px] text-red-500 '>$00.00</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>(0)</span>
                    </div>
                    <div className='h-2 w-[3%] bg-red-500 rounded-full border border-black'></div>
                    <div className='flex gap-1'>
                        <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                    </div>

                    <div className='absolute top-1'>
                       <img src={sale} className='w-[44px]'/>
                    </div>

                    <div className='absolute right-1 top-1'>
                       <img src={heart} className='w-[44px]'/>
                    </div>

                    <div className='absolute right-3 bottom-2'>
                       <img src={cart} className='w-[44px]'/>
                    </div>
                </div>
             </div>

             <div className="h-[300px] bg-white shadow-xl rounded-lg relative">
               {/*Product image*/}
                <div className='w-full h-[197px] end '>
                   <img className='w-[170px] mx-auto h-[170px]' src={phone}/>
                </div>
                {/*Product details*/}
                <div className=' w-full px-2 '>
                    <h1 className='font-semibold elps text-[16px]'>Iphone 13 Pro Max </h1>
                    <div className='flex gap-2'>
                       <p className='text-[14px]'>$00.00</p> <p className='line-through text-[14px] text-red-500 '>$00.00</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>(152)</span>
                    </div>
                    <div className='h-2 w-[44%] bg-orange-500 rounded-full border border-black'></div>
                    <div className='flex gap-1'>
                        <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                    </div>

                    <div className='absolute top-1'>
                       <img src={sale} className='w-[44px]'/>
                    </div>

                    <div className='absolute right-1 top-1'>
                       <img src={heart} className='w-[44px]'/>
                    </div>

                    <div className='absolute right-3 bottom-2'>
                       <img src={cart} className='w-[44px]'/>
                    </div>
                </div>
             </div>

             <div className="h-[300px] bg-white shadow-xl rounded-lg relative">
                {/*Product image*/}
                <div className='w-full h-[197px] end '>
                   <img className='w-[170px] mx-auto h-[170px]' src={phone}/>
                </div>
                {/*Product details*/}
                <div className=' w-full px-2 '>
                    <h1 className='font-semibold elps text-[16px]'>Iphone 13 Pro Max </h1>
                    <div className='flex gap-2'>
                       <p className='text-[14px]'>$00.00</p> <p className='line-through text-[14px] text-red-500 border'>$00.00</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>(8)</span>
                    </div>
                    <div className='h-2 w-[8%] bg-red-500 rounded-full border border-black'></div>
                    <div className='flex gap-1'>
                        <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                    </div>

                    <div className='absolute top-1'>
                       <img src={sale} className='w-[44px]'/>
                    </div>

                    <div className='absolute right-1 top-1'>
                       <img src={heart} className='w-[44px]'/>
                    </div>

                    <div className='absolute right-3 bottom-2'>
                       <img src={cart} className='w-[44px]'/>
                    </div>
                </div>
             </div>

             <div className="h-[300px] bg-white shadow-xl rounded-lg relative">
                  {/*Product image*/}
                <div className='w-full h-[197px] end '>
                   <img className='w-[170px] mx-auto h-[170px]' src={phone}/>
                </div>
                  {/*Product details*/}
                <div className=' w-full px-2 '>
                    <h1 className='font-semibold elps text-[16px]'>Iphone 13 Pro Max </h1>
                    <div className='flex gap-2'>
                       <p className='text-[14px]'>$00.00</p> <p className='line-through text-[14px] text-red-500 '>$00.00</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>(28)</span>
                    </div>
                    <div className='h-2 w-[28%] bg-red-500 rounded-full border border-black'></div>
                    <div className='flex gap-1'>
                        <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                         <BsStarFill className='text-yellow-500'/>
                    </div>

                    <div className='absolute top-1'>
                       <img src={sale} className='w-[44px]'/>
                    </div>

                    <div className='absolute right-1 top-1'>
                       <img src={heart} className='w-[44px]'/>
                    </div>

                    <div className='absolute right-3 bottom-2'>
                       <img src={cart} className='w-[44px]'/>
                    </div>
                </div>
             </div>
         </div>
    </div>
  )
}

export default TopProducts