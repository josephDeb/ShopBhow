
import filter from '../../../../frontend/src/assets/filter.png'
import galery from '../../assets/galery.gif'
import microphone from '../../assets/microphone.gif'

import { useState } from 'react'
import FooterBar from '../../pages/FooterBar'
import CycloneOffer from './CycloneOffer'

import Category from './Category'

import Banner from './Banner'
import Darkmode from './darkmode/Darkmode'
import TopProducts from './TopProducts'
import Banner3 from './banner/Banner3'
import WeeklySales from './WeeklySales'
import Banner4 from './banner/Banner4'
import Featured from './Featured'
import Collections from './Collections'


const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleFilter = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <div className='w-full xl:max-w-screen-lg xl:mx-auto bg-[#f1f2eb] relative'>

        <div className='h-[77px] flex justify-between items-center gap-2  relative w-[90%] mx-auto xl:w-full'>
            <input className=' w-full border-black/50 h-[44px] pl-4' placeholder='Search something...'></input>
            <button onClick={() => handleFilter()} className='bg-gray-500/70 w-[53px] h-[44px] rounded-lg centered'><img className='w-7' src={filter}/></button>
            {isOpen ? <div className='absolute w-[152px] h-[71px] border border-black bg-white right-6 top-[67px] rounded-s-2xl centered flex-col gap-1 z-[99]'>
                    <div className='centered gap-1 border-b border-black '>
                    <img src={microphone} className='w-6'/> <h1>Voice Search</h1>
                    </div>
                    <div className='centered gap-1'>
                    <img src={galery} className='w-6'/> <h1>Image Search</h1>
                    </div>
            </div>
            :
            <></>    
        }
        </div>
        

        
    </div>

    <div className='w-full'>
        
        <div className=''>
          <div className='w-full xl:max-w-screen-lg xl:mx-auto xl:flex-col bg-[#f1f2eb] xl:h-[140px]'>
            <Category />
          </div>

          <div className='w-full xl:max-w-screen-lg xl:mx-auto xl:h-[320px] bg-[#f1f2eb] centered h-[220px]'>
               <Banner />
          </div>
        </div>

        <div className='rounded-lg w-full xl:max-w-screen-lg xl:mx-auto h-[260px] xl:h-[260px]'>
            <CycloneOffer />
        </div>

        <div className='w-full xl:max-w-screen-lg xl:mx-auto h-[260px] xl:hidden'>
            <Darkmode />
        </div>

        <div className='w-full xl:max-w-screen-lg xl:mx-auto h-[1000px] xl:h-[400px] '>
            <TopProducts />
        </div>

        <div className='w-full xl:max-w-screen-lg xl:mx-auto h-[220px] xl:h-[280px] '>
            <Banner3 />
        </div>

        <div className='w-full xl:max-w-screen-lg xl:mx-auto h-[800px]'>
            <WeeklySales />
        </div>

        <div className='w-full xl:max-w-screen-lg xl:mx-auto h-[240px]'>
            <Banner4 />
        </div>

        <div className='w-full xl:max-w-screen-lg xl:mx-auto h-[440px]'>
            <Featured />
        </div>

        <div className='w-full xl:max-w-screen-lg xl:mx-auto h-[260px]'>
            <Collections />
        </div>

        <div className='h-[88px] w-full bg-[#f1f2eb]'>
            {/*space */}
        </div>

        <div className='fixed z-[88] w-full -bottom-1 h-[62px] shadow-2xl '>
             <FooterBar />
        </div>
    </div>
    </>
  )
}

export default Homepage