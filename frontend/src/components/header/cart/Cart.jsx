import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'
import CartDetails from './CartDetails'

const Cart = () => {
    const {cartProducts} = useContext(ShopContext)

  return (
    <div className='max-w-screen-lg h-screen mx-auto bg-red-200 '>

           {!cartProducts.length ? <div className='w-full centered'>
                <div className='h-[128px] centered'>
                     <h1 className='text-4xl font-bold'>Your cart is empty</h1>
                </div>
            </div>
           :
           <CartDetails cartProducts={cartProducts}/>
           }

    </div>
  )
}

export default Cart