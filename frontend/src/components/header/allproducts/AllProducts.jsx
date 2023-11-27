import { useEffect, useState } from 'react'
import axios from 'axios'

import FilterCategory from './FilterCategory';
import CardProduct from './CardProduct';
import FooterBar from '../../../pages/FooterBar';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get("/api/products")
        .then(res => {
            setProducts(res.data.Result)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get("/api/category/categories")
        .then(res => {
            setCategory(res.data.Result)
        }).catch(err => console.log(err))
    }, [])


  
  return (
    <>
    <div className='max-w-screen-xl bg-[#f1f2eb] h-[107px] manjari'>
        <div className='w-full centered h-[44px]'>

        </div>

        <FilterCategory category={category}/>
    </div>

    <div className='max-w-screen-xl bg-[#f1f2eb] '>
         <CardProduct products={products}/>
    </div>
    
    <div className='fixed z-[88] w-full -bottom-1 h-[62px] shadow-2xl '>
             <FooterBar />
        </div>
    </>
  )
}

export default AllProducts