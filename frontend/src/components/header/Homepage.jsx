import bg1 from '../../assets/laptop_12.jpg'
import filter from '../../../../frontend/src/assets/filter.png'



import { useState } from 'react'
import {MdKeyboardVoice} from 'react-icons/md'
import {BsImage} from 'react-icons/bs'
import FooterBar from '../../pages/FooterBar'
import CycloneOffer from './CycloneOffer'

import Category from './Category'
import Discount from './Discount'
import Banner from './Banner'
import Darkmode from './darkmode/Darkmode'
import TopProducts from './TopProducts'


const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleFilter = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <div className='w-full xl:max-w-screen-lg xl:mx-auto bg-[#f1f2eb] relative'>

        <div className='h-[77px] flex justify-between items-center px-6 gap-2  relative '>
            <input className='border-2 w-full border-black/50 h-[44px] pl-4' placeholder='Search something...'></input>
            <button onClick={() => handleFilter()} className='bg-gray-500/70 w-[53px] h-[44px] rounded-lg centered'><img className='w-7' src={filter}/></button>
            {isOpen ? <div className='absolute w-[135px] h-[71px] border border-black bg-white right-6 top-[67px] rounded-s-2xl centered flex-col gap-1'> 
                    <div className='centered gap-1 border-b border-black '>
                    <MdKeyboardVoice />  <h1>Voice Search</h1>
                    </div>
                    <div className='centered gap-1'>
                    <BsImage />  <h1>Image Search</h1>
                    </div>
            </div>
            :
            <></>    
        }
        </div>
        

        
    </div>

        <div className='w-full xl:max-w-screen-lg xl:mx-auto xl:flex xl:flex-col bg-[#f1f2eb]'>
            <Category />
        </div>

        <div className='w-full xl:max-w-screen-lg xl:mx-auto xl:h-[490px] bg-[#f1f2eb] centered h-[320px]'>
             <Banner />
        </div>

        <div className='w-full xl:max-w-screen-lg xl:mx-auto h-[240px]'>
            <CycloneOffer />
        </div>

        <div className='w-full xl:max-w-screen-lg xl:mx-auto'>
            <Darkmode />
        </div>

        <div className='w-full xl:max-w-screen-lg xl:mx-auto h-[240px]'>
            <TopProducts />
        </div>


        <div className=' w-full h-[62px] bottom-0 fixed z-[88] xl:hidden'>
            <FooterBar />
        </div>
    </>
  )
}

export default Homepage