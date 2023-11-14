
import { useContext, } from 'react';
import {MdPerson} from 'react-icons/md'
import {HiShoppingCart} from 'react-icons/hi'
import Hamburger from './Hamburger';
import { ShopContext } from './context/ShopContextProvider';
import { useNavigate } from 'react-router-dom';




const Header = () => {
  const navigate = useNavigate()
  const {setIsOpen,isOpen} = useContext(ShopContext)
  

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  
  return (
   <div className="w-full xl:h-[62px] h-[71px] bg-white">
        <div className="mx-auto max-w-screen-xl h-full  flex justify-between items-center lg:max-w-screen-lg">
          <div className='h-full text-center w-[200px] flex justify-center items-center gap-1'>
               <HiShoppingCart className='text-2xl'/>
              <h1 className='title text-[23px]'>Boss<span className='text-[#ed1d24]'>Pabile</span></h1>
          </div>

          {/*HAMBURGER NAV*/}
        <div className='h-full flex justify-center items-center xl:hidden'>
           <button
      className="flex flex-col h-12 w-12  border-black rounded justify-center items-center group mr-6 border-2 bg-[#ed1d24]/90"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "opacity-50 group-hover:opacity-100"
            : "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-50 group-hover:opacity-100" :  "opacity-0"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "opacity-50 group-hover:opacity-100"
            : "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            
        }`}
      />
          </button>
        </div>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}/>

      <div className='hidden xl:flex w-full h-full'>
      <div className='h-full w-full between '>
            <div className='w-full h-full centered gap-8 '>
              <h1 className='font-semibold'>Home</h1>
              <h1 className='font-semibold'>Shop</h1>
              <h1 className='font-semibold'>Blog</h1>
              <h1 className='font-semibold'>Pages</h1>
              <h1 className='font-semibold'>Contact</h1>
            </div>

            <div className='w-[44%] h-full centered  gap-6'>
                <div className='centered gap-4'>
                  <HiShoppingCart className='text-xl'/>
                  <MdPerson onClick={() => navigate('/login')} className='text-xl'/>
                </div>
                <button className='border-2 border-black/50 w-[140px] h-[70%] text-black font-bold spaceLetter rounded-sm'>Buy Now</button>
            </div>
        </div>
        
      </div>
        </div>
   </div>
  )
}

export default Header