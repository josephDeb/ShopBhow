
import { useContext, } from 'react';
import {HiLogout, HiShoppingCart} from 'react-icons/hi'
import { ShopContext } from './context/ShopContextProvider';
import { Link, Outlet, useNavigate } from 'react-router-dom';



const Header = () => {
  const navigate = useNavigate()

  const {cart, logout} = useContext(ShopContext)


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

            <div className='h-full flex justify-start items-center w-[28%]  gap-6 '>
                <div className='centered '>
                  <div onClick={() => navigate("/home/cart")} className='flex items-center  w-[125px] gap-3'>
                  <HiShoppingCart className='text-xl'/>
                     <h1>Cart: <span>({cart.length})</span></h1>
                  </div>
                </div>

                <div onClick={logout} className='flex gap-2 items-center justify-center  cursor-pointer' >
                       <h1>Logout</h1>
                      <HiLogout className='text-xl mb-1'/>
                  </div>
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