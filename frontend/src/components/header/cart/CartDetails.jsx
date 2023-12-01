/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContextProvider'
import axios from 'axios'
const CartDetails = ({cartProducts}) => {
    const {cart} = useContext(ShopContext)

  return (
    <div className='w-full flex'>
        <div className='w-[71%] h-screen bg-blue-200 flex flex-col gap-4'>
            <h1 className='text-4xl'>Your cart</h1>
            {cart.map((ct, i) => {
                return <div key={i}>
                    <h1>{ct.name}</h1>
                </div>
            })}
        </div>

        <div className='w-[29%] h-full'>
            <div className='h-[220px] bg-green-200 flex flex-col w-full items-center justify-center gap-4'>
                <h1 className='text-2xl'>Order information</h1>
                <button className='bg-black text-white px-8 py-2'>Continue payment</button>
            </div>
        </div>
    </div>
  )
}

export default CartDetails