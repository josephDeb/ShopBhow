import { BsStarFill } from 'react-icons/bs'
import phone from '../../assets/1.png'
import sale from '../../assets/sale.gif'
import heart from '../../assets/heart.gif'
import top from '../../assets/top.gif'
import cart from '../../assets/shopping-cart.gif'
import './styles2.css'
const TopProducts = () => {
  return (
    <div className='w-full h-[940px] bg-[#f1f2eb] centered flex-col gap-2'>
      <div className='w-[90%] mx-auto flex items-center'>
         <img src={top} className='w-10'/> <h1 className='font-bold '>Top products</h1>
      </div>

         <div className="w-[90%] grid grid-cols-2 gap-3">

             <div className="h-[290px] bg-white shadow-xl rounded-lg relative">
                <div className='w-full h-[197px] end '>
                   <img className='w-full h-[170px]' src={phone}/>
                </div>

                <div className=' w-full px-2 '>
                    <h1 className='font-semibold elps text-[16px]'>Iphone 13 Pro Max </h1>
                    <div className='flex items-center gap-1'>
                        <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>(44)</span>
                    </div>
                    <div className='flex gap-2'>
                       <p className='text-[14px]'>$00.00</p> <p className='line-through text-[14px] text-red-500 '>$00.00</p>
                    </div>
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

             <div className="h-[290px] bg-white shadow-xl rounded-lg relative">
                <div className='w-full h-[197px] end '>
                   <img className='w-full h-[170px]' src={phone}/>
                </div>

                <div className=' w-full px-2 '>
                    <h1 className='font-semibold elps text-[16px]'>Iphone 13 Pro Max </h1>
                    <div className='flex items-center gap-1'>
                        <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>(44)</span>
                    </div>
                    <div className='flex gap-2'>
                       <p className='text-[14px]'>$00.00</p> <p className='line-through text-[14px] text-red-500 '>$00.00</p>
                    </div>
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

             <div className="h-[290px] bg-white shadow-xl rounded-lg relative">
                <div className='w-full h-[197px] end '>
                   <img className='w-full h-[170px]' src={phone}/>
                </div>

                <div className=' w-full px-2 '>
                    <h1 className='font-semibold elps text-[16px]'>Iphone 13 Pro Max </h1>
                    <div className='flex items-center gap-1'>
                        <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>(44)</span>
                    </div>
                    <div className='flex gap-2'>
                       <p className='text-[14px]'>$00.00</p> <p className='line-through text-[14px] text-red-500 '>$00.00</p>
                    </div>
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

             <div className="h-[290px] bg-white shadow-xl rounded-lg relative">
                <div className='w-full h-[197px] end '>
                   <img className='w-full h-[170px]' src={phone}/>
                </div>

                <div className=' w-full px-2 '>
                    <h1 className='font-semibold elps text-[16px]'>Iphone 13 Pro Max </h1>
                    <div className='flex items-center gap-1'>
                        <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>(44)</span>
                    </div>
                    <div className='flex gap-2'>
                       <p className='text-[14px]'>$00.00</p> <p className='line-through text-[14px] text-red-500 '>$00.00</p>
                    </div>
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
             <div className="h-[290px] bg-white shadow-xl rounded-lg relative">
                <div className='w-full h-[197px] end '>
                   <img className='w-full h-[170px]' src={phone}/>
                </div>

                <div className=' w-full px-2 '>
                    <h1 className='font-semibold elps text-[16px]'>Iphone 13 Pro Max </h1>
                    <div className='flex items-center gap-1'>
                        <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>(44)</span>
                    </div>
                    <div className='flex gap-2'>
                       <p className='text-[14px]'>$00.00</p> <p className='line-through text-[14px] text-red-500 '>$00.00</p>
                    </div>
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
             <div className="h-[290px] bg-white shadow-xl rounded-lg relative">
                <div className='w-full h-[197px] end '>
                   <img className='w-full h-[170px]' src={phone}/>
                </div>

                <div className=' w-full px-2 '>
                    <h1 className='font-semibold elps text-[16px]'>Iphone 13 Pro Max </h1>
                    <div className='flex items-center gap-1'>
                        <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>(44)</span>
                    </div>
                    <div className='flex gap-2'>
                       <p className='text-[14px]'>$00.00</p> <p className='line-through text-[14px] text-red-500 '>$00.00</p>
                    </div>
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