/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
const ProductSingle = () => {
    const [singleProduct, setSingleProduct] = useState([])
    const {id} = useParams()
    useEffect(( ) => {
        axios.get("/api/products/"+id)
        .then(res => {
            setSingleProduct(res.data.single)
        })
    }, [])
   console.log(singleProduct)
  return (
    <div className='w-[90%] mx-auto border-2'>
        <div className='w-full'>
           {singleProduct.category}
        </div>
    </div>
  )
}

export default ProductSingle