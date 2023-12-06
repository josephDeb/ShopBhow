/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import '../styles2.css'
import QuantityBtn from './QuantityBtn'
const ProductSingle = () => {
  axios.defaults.withCredentials = true;
    const [singleProduct, setSingleProduct] = useState([])
    const {id} = useParams()
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products/'+id)
      .then(res=> {
        setSingleProduct(res.data)
      })
      .catch(error => console.log(error))
    }, [singleProduct])
  return (
    <div className='text-black manjari'>

         <div className='w-full   xl:flex xl:justify-center xl:items-center'>
             <div className='xl:w-[350px] w-full xl:h-[350px] h-[350px] centered'>
              <img src={singleProduct.image} className=' h-[260px] w- [260px]'/>
            </div>

             <div className='w-[90%] mx-auto'>
               <div className='flex flex-col h-full gap-2 xl:w-[88%]'>
                 <h1 className='xl:text-3xl text-xl'>{singleProduct.name}</h1>
                 <h1 className='text-xl'>TYPE: {singleProduct.category}</h1>
                 <h1 className='text-[#838383] elpstext w-[] '>{singleProduct.description}</h1>
                 <h1 className='font-extrabold man text-xl mt-2'>${singleProduct.price}</h1>

                 <div className='w-full flex flex-col gap-1'>
                    <div>
                      <QuantityBtn />
                    </div>
                    <div className='flex justify-start items-center gap-4 h-[53px]'>
                     <button className='w-[134px] bg-green-600 text-white h-[35px] border-b border-r border-black rounded-xl'>Add to cart</button>
                     <button className='w-[134px] bg-blue-600 text-white h-[35px] border-b border-r border-black rounded-xl'>Buy it now</button>
                 </div>
                 </div>

               </div>
             </div>
         </div>
    </div>
  )
}

export default ProductSingle