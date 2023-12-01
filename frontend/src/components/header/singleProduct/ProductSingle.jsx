/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import '../styles2.css'
const ProductSingle = () => {
    const [singleProduct, setSingleProduct] = useState([])
    const {id} = useParams()
    useEffect(( ) => {
        axios.get("/api/products/"+id)
        .then(res => {
            setSingleProduct(res.data.single)
        })
    }, [])

  return (
    <div className='w-[90%] mx-auto text-black manjari'>

         <div className='w-full   xl:flex xl:justify-center xl:items-center'>
             <div className='xl:w-[350px] w-full xl:h-[350px] h-[350px] centered'>
           <img src={'../../../../images/'+singleProduct.image} className=' h-[260px] w- [260px]'/>
            </div>

             <div className='w-[100%]'>
            <div className='flex flex-col h-full gap-1'>
                 <h1 className='text-3xl'>{singleProduct.name}</h1>
                 <h1 className='text-xl'>TYPE: {singleProduct.category}</h1>
                 <h1 className='text-[#838383] line-clamp  '>{singleProduct.description}</h1>
                 <h1 className='font-extrabold man text-xl mt-2'>{singleProduct.price} <span>usd</span></h1>

                 <div className='w-full flex gap-3 h-[35px] items-center'>
                    <h1>Quantity: </h1>
                    <div>+ 0 -</div>
                 </div>

                 <div className='flex justify-start items-center gap-4 h-[53px]'>
                     <button className='w-[134px] bg-green-600 text-white h-[35px]'>Add to cart</button>
                     <button className='w-[134px] bg-blue-600 text-white h-[35px]'>Buy it now</button>
                 </div>
            </div>
             </div>
         </div>
    </div>
  )
}

export default ProductSingle