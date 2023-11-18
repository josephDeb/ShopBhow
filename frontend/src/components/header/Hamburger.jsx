/* eslint-disable react/prop-types */
import { BsArrowLeftCircleFill } from 'react-icons/bs'

import Details from './details/Details'

const Hamburger = ({isOpen,setIsOpen}) => {

  return (
    <div className={` ${isOpen ? "-left-[107%] transition-all duration-300" : "left-0 transition-all duration-300"} xl:hidden flex justify-center items-center w-full xl:w-[26%] h-[102vh] fixed z-[99] bg-black/80 transition-all duration-300 top-[0px]`}>
       <div className="w-full h-full relative">
      {/*Arrow Exit */}
           <div onClick={() => setIsOpen(!isOpen)}  className='absolute right-[176px] top-[344px]'>
          <BsArrowLeftCircleFill className='text-4xl shadow-xl hover:scale-125'/>
           </div>

           <Details />

       </div>
    </div>
  )
}

export default Hamburger