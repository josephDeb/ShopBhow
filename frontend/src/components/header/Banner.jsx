import { BsArrowRightShort } from 'react-icons/bs'
import piggy from '../../assets/sofa.png'
import '../Styles/btn.css'
const Banner = () => {
  return (
    <div className='w-full h-[280px centered bg-white relative manjari'>
          <img className='w-full h-[280px]' src={piggy}/>

          <div className='absolute right-[8px] flex flex-col gap-2'>
              <div className='text-xl w-[200px]'>
                <p>Anniversary special <span className='text-[#ed1d24]'>15%</span> off</p>
              </div>
              <button className="box-3 transition-all duration-300">
                 <div className="btn btn-three">
                    <span className='centered'>Shop now<BsArrowRightShort className='text-2xl mb-1'/></span>
                 </div>
            </button>
          </div>
    </div>
  )
}

export default Banner