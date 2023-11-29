import banner3 from '../../../assets/make-up.png'
import './styles.css'

const Banner3 = () => {
  return (
    <div className='w-full h-[200px] flex justify-end items-end xl:h-[260px]'>
        <div className='w-[90%] mx-auto h-[180px] bg-red-500 bg rounded-lg relative xl:w-full xl:h-[260px]'>

            <div className='w-[72%] h-full centered flex-col gap-1 xl:w-[80%]'>
                <div className='w-[160px]  text-white xl:w-[440px] '>
                    <h1 className='text-xl font-bold  xl:text-4xl'>20% discount on women's</h1>
                </div>
                <div className='xl:w-[440px] ht2 text-gray-300 '>
                    <h1 className='text-[12px] font-bold xl:text-xl'>Offer will continue this Friday.</h1>
                </div>

                <div className='w-[160px] h-[35px] xl:w-[440px] '>
                    <button className='bg-gradient-to-br from-yellow-400 to-yellow-600 w-[140px] h-full'>Grab this offer</button>
                </div>
            </div>

            <div className='absolute right-0 xl:right-[18%] bottom-0'>
              <img src={banner3} className='w-[88px] xl:w-[150px]'/>
            </div>
        </div>
    </div>
  )
}

export default Banner3