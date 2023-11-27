/* eslint-disable react/prop-types */


import sale from '../../../assets/sale.gif'
import heart from '../../../assets/heart.gif'
import cart from '../../../assets/shopping-cart.gif'
import rate from '../../../assets/rate.png'
import outofstock from '../../../assets/out-of-stock.png'

const CardProduct = ({products}) => {

  return (
    <>
      <div className="w-[90%] grid grid-cols-2 gap-3 mx-auto mt-4  mb-[88px] manjari" >
          {products.map((prd, i) => {



            return <div key={i} className="h-[300px] bg-white shadow-xl rounded-lg relative flex flex-col justify-between">

            {prd.stocks === 0 ? <div className='absolute h-full w-full bg-black/80 rounded-lg z-[20] centered'>
                  <img src={outofstock} className='w-[71%]'/>
               </div>
               :
               <></>
            }

            <div className='w-full h-[170px] end'>
               <img className='w-[130px] mx-auto h-[130px] ' src={'../../../../images/'+prd.image}/>
            </div>

            <div className=' w-full px-2 pb-4'>
                <h1 className='font-semibold elps text-[16px]'>{prd.name} </h1>
                <div className='flex gap-2'>
                   <p className='text-[14px]'>${prd.price}</p> <p className='line-through text-[14px] text-red-500 '>${prd.price}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <h4 className='text-[14px]'>Stocks</h4> <span className='text-[14px]'>({prd.stocks})</span>
                </div>
                <div className={`h-2 w-[${prd.stocks}%] ${prd.stocks <= 44 ? "bg-orange-500 rounded-full" : "bg-green-500"} rounded-full border border-black`}></div>

                <div className='flex items-end gap-2 mt-1'>
                    <img src={rate} className='w-8'/>
                  <h1 className=''>({prd.stocks})</h1>
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
          })}
      </div>
    </>
  )
}

export default CardProduct