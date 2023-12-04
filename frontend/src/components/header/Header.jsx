
import { useContext, } from 'react';
import {MdPerson} from 'react-icons/md'
import {HiShoppingCart} from 'react-icons/hi'
import Hamburger from './Hamburger';
import { ShopContext } from './context/ShopContextProvider';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux'




const Header = () => {
  const navigate = useNavigate()
  const {setIsOpen,isOpen} = useContext(ShopContext)
  const {currentUser} = useSelector(state => state.user)

  const {cart} = useContext(ShopContext)
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  
  return (
   <>
      <div className="w-full xl:h-[71px] h-[71px] bg-white manjari">
        <div className="mx-auto max-w-screen-xl h-full  flex justify-between items-center lg:max-w-screen-lg ">
          <div className='h-full text-center w-[152px] flex justify-center items-center gap-1'>
              <Link to={'/home'} className='manjari text-[23px] mt-2 xl:mt-0 font-bold'>Shop<span className='text-[#ed1d24]'>Bow</span></Link>
          </div>


    <div className='hidden xl:flex w-full h-full'>
      <div className='h-full w-full between '>
            <div className='w-full h-full centered gap-8 '>
              <h1 className='font-semibold'>Home</h1>
              <h1 className='font-semibold'>Shop</h1>
              <h1 className='font-semibold'>Blog</h1>
              <h1 className='font-semibold'>Pages</h1>
              <h1 className='font-semibold'>Contact</h1>
            </div>

            <div className='h-full flex justify-between items-center w-[17%]  gap-6'>
                <div className='centered '>
                  <div onClick={() => navigate("/home/cart")} className='flex items-center  w-[125px] gap-3'>
                  <HiShoppingCart className='text-xl'/>
                     <h1>Cart: <span>({cart.length})</span></h1>
                  </div>
                </div>
            </div>
        </div>
        
      </div>

        {currentUser ? <><div className='h-full flex justify-center items-center xl:hidden hidden'>
           <button
      className="flex flex-col h-12 w-12   border-black rounded justify-center items-center group mr-6 border-2 "
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
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}/></>
         : <></>}

        </div>
      </div>

      <Outlet />
   </>
  )
}

export default Header