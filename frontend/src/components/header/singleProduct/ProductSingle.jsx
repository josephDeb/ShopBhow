/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import '../styles2.css'
import QuantityBtn from './QuantityBtn'
import { ShopContext } from '../context/ShopContextProvider'
const ProductSingle = () => {

    const {id} = useParams()

    const {products} = useContext(ShopContext)

    const singleData = products.find((pr) => pr._id === id)

    console.log(singleData)


    const {addCart} = useContext(ShopContext)
  return (
    <div className='text-black manjari '>

         <div className='w-full   xl:flex xl:justify-center xl:items-center'>
             <div className='xl:w-[440px] w-full xl:h-[350px]  centered p-5'>
              <img src={'../../../../images/'+singleData.image} className=' h-[260px] w- [260px]'/>
              </div>

             <div className='w-[90%] mx-auto'>
               <div className='flex flex-col h-full gap-2 xl:w-[88%]'>
                 <h1 className='xl:text-3xl text-xl'>{singleData.name}</h1>
                 <h1 className='text-xl'>TYPE: {singleData.category}</h1>
                 <div className='flex flex-col'>
                  <h2>Description: </h2>
                  <h1 className='text-[#838383] xl:elpstext'>{singleData.description}</h1>
                 </div>
                 <h1 className='font-extrabold man text-xl mt-2'>${singleData.price}</h1>

                 <div className='w-full flex flex-col gap-1'>
          
                    <div className='flex justify-start items-center gap-4 h-[53px]'>
                     <button onClick={() => addCart(singleData, id)} className='w-[134px] bg-green-600 text-white h-[35px] border-b border-r border-black rounded-xl'>Add to cart</button>
                     <Link to={'/home/cart'} onClick={() => addCart(singleData, id)}  className='w-[134px] bg-blue-600 text-white h-[35px] border-b border-r border-black rounded-xl centered'>Buy it now</Link>
                 </div>
                 </div>
               </div>
             </div>
         </div>
    </div>
  )
}

export default ProductSingle