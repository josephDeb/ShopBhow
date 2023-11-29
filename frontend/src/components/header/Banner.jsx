import { BsArrowRightShort } from 'react-icons/bs'
import img from '../../assets/5.png'
import btnshopnow from '../../assets/btnshopnow.png'
import '../Styles/btn.css'
import { useEffect, useState } from 'react'
const Banner = () => {
  const [time, setTime] = useState("")

  return (
     <div className='w-full h-[220px] centered xl:h-[300px]'>

        {/*Mobile responsive Banner*/}
     <div className='w-[90%] mx-auto h-[180px] bg-gradient-to-br from-green-600 to-green-800 rounded-lg relative  xl:hidden lg:hidden '>
         <div className='absolute right-[44px] bottom-[44px]'>
           <img src={img} className='w-[88px]'/>
         </div>

         <div className='w-[68%] h-full centered flex-col gap-1'>
             <div className='w-[160px]  text-white '>
                 <h1 className='text-xl font-bold ht'>Habitat Remi Fabric Armchair</h1>
             </div>
             <div className='w-[160px] ht2 text-gray-300 '>
                 <h1 className='text-[12px] font-bold'>In a box - Charcoal</h1>
             </div>

             <div className='w-[160px] h-[35px] mt-2'>
                 <button className='bg-gradient-to-br from-blue-400 to-blue-600 w-[140px] h-full text-white'>Get now</button>
             </div>
         </div>

     </div>

     <div className='xl:h-[300px] w-full bg-gradient-to-br from-green-600 to-green-800 hidden xl:flex rounded-lg xl:justify-center xl:items-center'>
          <div className='w-[70%] mx-auto centered'>
                <div className='flex flex-col'>
                  <h1 className='text-4xl font-bold text-white'>Habitat Remi Fabric Armchair</h1>
                  <h1 className='text-xl text-white font-normal'>In a box - Charcoal</h1>

                  <button className='text-white w-[170px] h-[44px] mt-4 bg-gradient-to-br from-cyan-600 to-blue-800'>Get now</button>
                </div>

                <div className=''>
                    <img src={img} className='w-[100%] h-[100%]'/>
                </div>
          </div>
     </div>
 </div>
  )
}

export default Banner