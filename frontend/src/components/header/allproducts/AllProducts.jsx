import { useContext, useEffect, useState } from 'react'
import arrow from '../../../assets/arrow-right.gif'
import {AiOutlineSearch} from 'react-icons/ai'

import FilterCategory from './FilterCategory';
import CardProduct from './CardProduct';
import FooterBar from '../../../pages/FooterBar';
import { ShopContext } from '../context/ShopContextProvider';
import { Link } from 'react-router-dom';
import MbSearchBar from './MbSearchBar';

const AllProducts = () => {

    const {category, products, search, values, filterItems, fillT} = useContext(ShopContext)
    console.log(values)

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [AllProducts]);
    
  return (
    <div className='h-screen xl:max-w-screen-lg mx-auto'>
    
    <div className='mx-auto w-full'>
        <MbSearchBar />
    </div>

    <div className='mx-auto'>
     <FilterCategory category={category} filterItems={filterItems} products={products}/>
    </div>

    <div className='w-[100%] mx-auto'>
      <Link to={'/home'} className='flex items-center border border-black xl:w-[220px] xl:h-[44px] mt-4 gap-2'>
        <img src={arrow} className='a rotate-180 w-8'/>
        <h1>Back to homepage</h1>
      </Link>
    </div>

    <div className='xl:max-w-screen-lg mx-auto'>
         <CardProduct search={search} />
    </div>
    
    <div className='fixed z-[88] w-full -bottom-1 h-[62px] shadow-2xl '>
             <FooterBar />
        </div>
    </div>
  )
}

export default AllProducts