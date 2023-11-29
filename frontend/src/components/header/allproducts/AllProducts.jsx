import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {AiOutlineSearch} from 'react-icons/ai'

import FilterCategory from './FilterCategory';
import CardProduct from './CardProduct';
import FooterBar from '../../../pages/FooterBar';
import { ShopContext } from '../context/ShopContextProvider';

const AllProducts = () => {

    const {category, products, search, values, filterItems, fillT} = useContext(ShopContext)
    console.log(values)



  return (
    <>
    <div className='xl:max-w-screen-lg h-[107px] manjari mx-auto'>
        <div className='w-[62%] flex justify-start items-center h-[62px] relative'>
        <div className=' flex bg-white border border-black w-80 sm:w-[800px] rounded-md  relative py-1'>
                <AiOutlineSearch className='ml-2 text-2xl' />
                <input type="text"
                    placeholder='Search here...'
                    value={values}
                    onChange={fillT}
                    className=' ml-2 text-lg w-full focus:outline-none'
                />
                {values &&
                    <div className='bg-white py-2 text-black w-full z-10 absolute top-10 rounded-md max-h-40 overflow-y-auto'>
                        {search.map((sr, index) => (
                            <p key={index} className='pl-4 hover:bg-yellow-300 cursor-pointer'>
                                {sr.name}
                            </p>
                        ))}
                    </div>
                }
            </div>
        </div>

        <FilterCategory category={category} filterItems={filterItems} products={products}/>
    </div>

    <div className='xl:max-w-screen-lg mx-auto'>
         <CardProduct search={search} />
    </div>
    
    <div className='fixed z-[88] w-full -bottom-1 h-[62px] shadow-2xl '>
             <FooterBar />
        </div>
    </>
  )
}

export default AllProducts