import coupon from '../../../assets/coupon.png'
import './styles.css'

const Banner4 = () => {
  return (
    <div className='w-full h-[240px] bg-[#f1f2eb] centered xl:h-[260px]'>
        <div className='w-[90%] mx-auto h-[180px] banner4 rounded-lg relative xl:w-full xl:h-[260px]'>
          
            <div className='absolute right-[44px] bottom-[44px] xl:right-[14%]'>
              <img src={coupon} className='w-[88px] xl:w-[180px]'/>
            </div>

            <div className='w-[68%] h-full centered flex-col gap-1 xl:w-[58%] xl:flex xl:justify-center xl:items-end'>
                <div className='w-[160px]  text-white xl:w-[400px] xl:text-start'>
                    <h1 className='text-xl font-bold ht xl:text-4xl'>Get more vouchers</h1>
                </div>
                <div className='w-[160px] ht2 text-gray-300 xl:w-[400px] text-start'>
                    <h1 className='text-[12px] font-bold xl:text-xl'>Use voucher to get exclusive discount.</h1>
                </div>

                <div className='w-[160px] h-[35px] mt-2 xl:w-[400px] xl:flex xl:justify-start'>
                    <button className='bg-gradient-to-br from-green-400 to-green-600 w-[140px] h-full'>View vouchers</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Banner4