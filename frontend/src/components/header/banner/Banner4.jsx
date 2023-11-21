import coupon from '../../../assets/coupon.png'
import './styles.css'

const Banner4 = () => {
  return (
    <div className='w-full h-[240px] bg-[#f1f2eb] centered'>
        <div className='w-[90%] mx-auto h-[180px] bg-[#f1f2eb] banner4 rounded-lg relative'>
            <div className='absolute right-[44px] bottom-[44px]'>
              <img src={coupon} className='w-[88px]'/>
            </div>

            <div className='w-[68%] h-full centered flex-col gap-1'>
                <div className='w-[160px]  text-white '>
                    <h1 className='text-xl font-bold ht'>Get more vouchers</h1>
                </div>
                <div className='w-[160px] ht2 text-gray-300 '>
                    <h1 className='text-[12px] font-bold'>Use voucher to get exclusive discount.</h1>
                </div>

                <div className='w-[160px] h-[35px] mt-2'>
                    <button className='bg-gradient-to-br from-green-400 to-green-600 w-[140px] h-full'>View vouchers</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Banner4