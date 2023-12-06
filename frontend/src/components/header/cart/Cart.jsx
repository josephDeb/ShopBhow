import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'
import CartDetails from './CartDetails'

import emptyCart from '../../../assets/empty-cart.png'

const Cart = () => {
    const {cart} = useContext(ShopContext)

  return (
    <div className='max-w-screen-lg  mx-auto'>

           {!cart.length ? <div className='w-full centered flex flex-col centered h-[620px] xl:h-[710px]'>
                <h1 className='text-4xl text-red-500 font-bold manjari'>You cart is empty</h1>
                <img src={emptyCart} className='object-cover'/>
            </div>
           :
           <CartDetails />
           }

    </div>
  )
}

export default Cart