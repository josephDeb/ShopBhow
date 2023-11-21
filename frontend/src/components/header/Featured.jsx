import camera from '../../assets/3.png'
import bookmark from '../../assets/bookmark.gif'
const Featured = () => {
  return (
    <div className="w-full  h-[440px] centered flex-col bg-[#f1f2eb]">
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
                    <div className='flex items-center text-[13px] gap-1'>
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