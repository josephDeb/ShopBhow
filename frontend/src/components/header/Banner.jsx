import { BsArrowRightShort } from 'react-icons/bs'
import piggy from '../../assets/sofa.png'
import '../Styles/btn.css'
const Banner = () => {
  return (
    <div className='w-full h-[287px] centered bg-[#f1f2eb] relative manjari xl:h-[480px]'>
          <img className='w-[90%] h-[280px] xl:h-[480px] rounded-md xl:w-full' src={piggy}/>

          <div className='absolute right-[35px] top-[90px] flex flex-col gap-2 xl:right-[126px] xl:top-[35%]'>
              <div className='text-xl w-[200px] xl:text-4xl xl:w-[350px]'>
                <p>Anniversary special <span className='text-[#ed1d24]'>15%</span> off</p>
              </div>
              <button className="box-3 transition-all duration-300 w-[140px] text-[12px] absolute right-[20px] -bottom-[53px]">
                 <div className="btn btn-three">
                    <span className='centered'>Shop now<BsArrowRightShort className='text-2xl mb-1'/></span>
                 </div>
            </button>
          </div>
    </div>
  )
}

export default Banner