
import { useContext, } from 'react';
import {MdPerson} from 'react-icons/md'
import {HiShoppingCart} from 'react-icons/hi'
import Hamburger from './Hamburger';
import { ShopContext } from './context/ShopContextProvider';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useSelector} from 'react-redux'




const Header = () => {
  const navigate = useNavigate()
  const {setIsOpen,isOpen} = useContext(ShopContext)
  const {currentUser} = useSelector(state => state.user)

  const {cartProducts} = useContext(ShopContext)
  console.log(cartProducts)
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  
  return (
   <>
      <div className="w-full xl:h-[71px] h-[71px] ">
        <div className="mx-auto max-w-screen-xl h-full  flex justify-between items-center lg:max-w-screen-lg ">
          <div className='h-full text-center w-[152px] flex justify-center items-center gap-1'>
              <Link to={'/home'} className='manjari text-[23px] mt-2 xl:mt-0 font-bold'>Shop<span className='text-[#ed1d24]'>Bow</span></Link>
          </div>

        {currentUser ? <><div className='h-full flex justify-center items-center xl:hidden'>
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


      <div className='hidden xl:flex w-full h-full'>
      <div className='h-full w-full between '>
            <div className='w-full h-full centered gap-8 '>
              <h1 className='font-semibold'>Home</h1>
              <h1 className='font-semibold'>Shop</h1>
              <h1 className='font-semibold'>Blog</h1>
              <h1 className='font-semibold'>Pages</h1>
              <h1 className='font-semibold'>Contact</h1>
            </div>

            <div className='h-full flex justify-between items-center w-[44%]  gap-6 '>
                <div className='centered '>
                  <div className='flex items-center  w-[85px]'>
                  <HiShoppingCart className='text-xl'/>
                     <h1>Cart: <span>({cartProducts.length})</span></h1>
                  </div>
                  <MdPerson onClick={() => navigate('/login')} className='text-xl'/>
                </div>
                <button className='border-2 border-black/50 w-[170px] h-[62%] text-black font-bold spaceLetter rounded-sm'>Buy Now</button>
            </div>
        </div>
        
      </div>
        </div>
      </div>

      <Outlet />
   </>
  )
}

export default Header