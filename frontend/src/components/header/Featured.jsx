import camera from '../../assets/3.png'
import jacket from '../../assets/4.png'
import skincare from '../../assets/skincare1.png'
import chair from '../../assets/11.png'
import ball from '../../assets/ball.png'
import babychair from '../../assets/babychair.png'
import bookmark from '../../assets/bookmark.gif'
import check from '../../assets/check.gif'
import arrow from '../../assets/arrow-right.gif'
const Featured = () => {
  return (
    <div className="w-full  h-[440px] centered flex-col bg-[#f1f2eb]">
        <div className='w-[90%] mx-auto flex items-center justify-between'>
         <div className='flex items-center'>
             <img src={check} className='w-10'/>
             <h1 className='font-bold '>Featured</h1>
         </div>

         <div className='flex items-center gap-1'>
               <img src={arrow} className='w-10 h-10 '/>
               <h1 className='font-bold '>View all</h1>
         </div>
      </div>

        <div className='w-[90%] h-[400px]  grid grid-cols-3 gap-2'>

            <div className='w-full h-[180px] bg-white flex flex-col shadow-xl relative rounded-lg'>
                <div className='absolute -top-1'>
                    <img src={bookmark} className='w-12'/>
                </div>
                <div className='h-[98px] w-full end '>
                <img src={camera} className='w-[88px] h-[88px] mx-auto '/>
                </div>

                <div className='w-full h-[80px] flex flex-col px-1'>
                    <p className='text-[17px] ht4 '>Canon camera Pro</p>
                    <h4 className='text-[13px]'>$1111.11</h4>
                    <div className='flex items-center text-[13px] gap-1 text-gray-500'>
                       <h3>Stocks</h3><span>(88)</span>
                    </div>
                    <i className='h-2 w-[71%] bg-green-500 rounded-full'></i>
                </div>
            </div>

            <div className='w-full h-[180px] bg-white flex flex-col shadow-xl relative rounded-lg'>
                <div className='absolute -top-1'>
                    <img src={bookmark} className='w-12'/>
                </div>
                <div className='h-[98px] w-full end '>
                <img src={jacket} className='w-[88px] h-[88px] mx-auto '/>
                </div>

                <div className='w-full h-[80px] flex flex-col px-1'>
                    <p className='text-[17px] ht4 '>Jacket ni Nasus</p>
                    <h4 className='text-[13px]'>$1111.11</h4>
                    <div className='flex items-center text-[13px] gap-1 text-gray-500'>
                       <h3>Stocks</h3><span>(88)</span>
                    </div>
                    <i className='h-2 w-[71%] bg-green-500 rounded-full'></i>
                </div>
            </div>

            <div className='w-full h-[180px] bg-white flex flex-col shadow-xl relative rounded-lg'>
                <div className='absolute -top-1'>
                    <img src={bookmark} className='w-12'/>
                </div>
                <div className='h-[98px] w-full end '>
                <img src={skincare} className='w-[88px] h-[88px] mx-auto '/>
                </div>

                <div className='w-full h-[80px] flex flex-col px-1'>
                    <p className='text-[17px] ht4 '>Jacket ni Nasus</p>
                    <h4 className='text-[13px]'>$1111.11</h4>
                    <div className='flex items-center text-[13px] gap-1 text-gray-500'>
                       <h3>Stocks</h3><span>(88)</span>
                    </div>
                    <i className='h-2 w-[71%] bg-green-500 rounded-full'></i>
                </div>
            </div>

            <div className='w-full h-[180px] bg-white flex flex-col shadow-xl relative rounded-lg'>
                <div className='absolute -top-1'>
                    <img src={bookmark} className='w-12'/>
                </div>
                <div className='h-[98px] w-full end '>
                <img src={chair} className='w-[88px] h-[88px] mx-auto '/>
                </div>

                <div className='w-full h-[80px] flex flex-col px-1'>
                    <p className='text-[17px] ht4 '>Jacket ni Nasus</p>
                    <h4 className='text-[13px]'>$1111.11</h4>
                    <div className='flex items-center text-[13px] gap-1 text-gray-500'>
                       <h3>Stocks</h3><span>(88)</span>
                    </div>
                    <i className='h-2 w-[71%] bg-green-500 rounded-full'></i>
                </div>
            </div>

            <div className='w-full h-[180px] bg-white flex flex-col shadow-xl relative rounded-lg'>
                <div className='absolute -top-1'>
                    <img src={bookmark} className='w-12'/>
                </div>
                <div className='h-[98px] w-full end '>
                <img src={ball} className='w-[88px] h-[88px] mx-auto '/>
                </div>

                <div className='w-full h-[80px] flex flex-col px-1'>
                    <p className='text-[17px] ht4 '>Jacket ni Nasus</p>
                    <h4 className='text-[13px]'>$1111.11</h4>
                    <div className='flex items-center text-[13px] gap-1 text-gray-500'>
                       <h3>Stocks</h3><span>(88)</span>
                    </div>
                    <i className='h-2 w-[71%] bg-green-500 rounded-full'></i>
                </div>
            </div>

            <div className='w-full h-[180px] bg-white flex flex-col shadow-xl relative rounded-lg'>
                <div className='absolute -top-1'>
                    <img src={bookmark} className='w-12'/>
                </div>
                <div className='h-[98px] w-full end '>
                <img src={babychair} className='w-[88px] h-[88px] mx-auto '/>
                </div>

                <div className='w-full h-[80px] flex flex-col px-1'>
                    <p className='text-[17px] ht4 '>Lovouse baby swing</p>
                    <h4 className='text-[13px]'>$1111.11</h4>
                    <div className='flex items-center text-[13px] gap-1 text-gray-500'>
                       <h3>Stocks</h3><span>(88)</span>
                    </div>
                    <i className='h-2 w-[71%] bg-green-500 rounded-full'></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured