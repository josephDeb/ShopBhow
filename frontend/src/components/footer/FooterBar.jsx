
import { useContext, useEffect } from 'react'
import {BsChatLeftDotsFill, BsHeartFill, } from 'react-icons/bs'
import { HiHome, HiShoppingBag } from 'react-icons/hi'


import { Link } from 'react-router-dom'
import { ShopContext } from '../header/context/ShopContextProvider'
import { FaSignOutAlt } from 'react-icons/fa'



import {  useState } from 'react'

import CircleLoader	 from "react-spinners/CircleLoader";

const FooterBar = () => {
    const {logout} = useContext(ShopContext)

    const [loading, setLoading] = useState(false)
  
    useEffect(() =>{ 
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 3000)
    }, [])
     return (

    <>
         {loading ? 
      <div className="flex justify-center items-center h-screen flex-col ">
      <CircleLoader	
        loading={loading}
        color={"#ed1d24"}
        size={80}
        aria-label="HashLoader	"
        data-testid="loader"
      />
      <h1 className="text-black text-xl mt-8 ">Loading</h1>
     </div>
     
    :

    <div className='w-full h-full bg-gradient-to-br from-amber-500 to-yellow-600 flex justify-between items-center px-4 xl:hidden'>
    <div className=' h-full w-[62px] flex flex-col centered cursor-pointer text-white'>
        <HiHome className=' text-3xl'/>
        <h4>Home</h4>
    </div>
    <div className=' h-full w-[62px] flex flex-col centered cursor-pointer text-white'>
        <BsChatLeftDotsFill className=' text-2xl'/>
        <h4>Notification</h4>
    </div>
    <Link to={'/home/cart'} className=' h-full w-[62px] flex flex-col centered cursor-pointer text-white justify-start'>
        <HiShoppingBag className=' text-3xl'/>
        <h4>Cart</h4>
    </Link>
    <div className=' h-full w-[62px] flex flex-col centered cursor-pointer text-white justify-start'>
        <BsHeartFill className='text-2xl'/>
        <h4>Wishlist</h4>
    </div>
    <div onClick={logout} className='text-white h-full w-[62px] flex flex-col centered cursor-pointer justify-start'>
    <FaSignOutAlt className='text-3xl'/>
    <h4>Sign out</h4>
    </div>
</div>
    }
    </>

    
  )
}

export default FooterBar