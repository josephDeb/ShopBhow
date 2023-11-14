
import {BsChatLeftDotsFill, BsHeartFill} from 'react-icons/bs'
import { HiHome, HiShoppingBag } from 'react-icons/hi'

import {  MdSettings } from 'react-icons/md'


const FooterBar = () => {
  return (
    <div className='w-full h-full bg-gradient-to-br from-amber-500 to-yellow-600 flex justify-between items-center px-4 xl:hidden'>
        <div className=' h-full w-[62px] flex flex-col centered cursor-pointer'>
            <HiHome className='text-white text-3xl'/>
        </div>
        <div className=' h-full w-[62px] flex flex-col centered cursor-pointer'>
            <BsChatLeftDotsFill className='text-white text-2xl'/>
        </div>
        <div className=' h-full w-[62px] flex flex-col centered cursor-pointer'>
            <HiShoppingBag className='text-white text-3xl'/>
        </div>
        <div className=' h-full w-[62px] flex flex-col centered cursor-pointer'>
        <MdSettings className='text-white text-3xl'/>
        </div>
        <div className=' h-full w-[62px] flex flex-col centered cursor-pointer'>
            <BsHeartFill className='text-white text-2xl'/>
        </div>
    </div>
  )
}

export default FooterBar