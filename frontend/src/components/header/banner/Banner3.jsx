import banner3 from '../../../assets/make-up.png'
import './styles.css'

const Banner3 = () => {
  return (
    <div className='w-full h-[350px] bg-[#f1f2eb]'>
        <div className='w-[90%] mx-auto h-[180px] bg-red-500 bg rounded-lg relative'>

            <div className='w-[72%] h-full centered flex-col gap-1'>
                <div className='w-[160px]  text-white '>
                    <h1 className='text-xl font-bold ht'>20% discount on women's</h1>
                </div>
                <div className='w-[160px] ht2 text-gray-300 '>
                    <h1 className='text-[12px] font-bold'>Offer will continue this Friday.</h1>
                </div>

                <div className='w-[160px] h-[35px] mt-2'>
                    <button className='bg-gradient-to-br from-yellow-400 to-yellow-600 w-[140px] h-full'>Grab this offer</button>
                </div>
            </div>

            <div className='absolute right-0 bottom-0'>
              <img src={banner3} className='w-[88px]'/>
            </div>
        </div>
    </div>
  )
}

export default Banner3