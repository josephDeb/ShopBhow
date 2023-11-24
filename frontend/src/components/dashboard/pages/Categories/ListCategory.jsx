import { useEffect, useState } from 'react'

import axios from 'axios'

import AddCategories from './AddCategories'
import { Swiper, SwiperSlide } from 'swiper/react';
import {MdEditNote, MdDelete} from 'react-icons/md'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Link, Outlet } from 'react-router-dom';
import UpdateCategory from './UpdateCategory';

const ListCategory = () => {

    const [listCt, setListCt] =  useState([])
    useEffect(() => {
    axios.get("/api/category/categories")
    .then(res => {
        setListCt(res.data.Result)
    })
    .catch(err => console.log(err))
    }, [])
    
    const handleDelete = async (id) => {
         await axios.delete("/api/category/"+id)
        .then(res => {
            window.location.reload()
            console.log(res)
        }).catch(err=> console.log(err))
    } 
  
  return (
    <div className='max-w-screen-xl'>
 <div className='flex justify-end  flex-col h-[200px]'>

<Link to={'/admin-dashboard/categories/add'} className=' top-[35px] left-0 bg-gradient-to-br from-cyan-600 to-blue-900 h-[35px] w-full centered font-bold'>
    <button>Add category</button>
</Link>
<div className='w-full  flex justify-center items-center py-4  mb-4'>
    <h1 className='xl:text-4xl text-xl uppercase font-bold text-white '>Category List</h1>
</div>
</div>
    <Swiper
breakpoints={{
  320: {slidesPerView: 3, spaceBetween: 8},
  640:{slidesPerView: 4, spaceBetween: 32},
  1260:{slidesPerView:6, spaceBetween: 8},
}}
spaceBetween={8}
direction={'vertical'}
modules={[Pagination]}
className='mySwiper w-[100%] h-[250px] bg-white'>
    {listCt.map((ct, i) => {
      return <SwiperSlide key={i} className='centered border-2 bg-gray-400 flex items-center'>
          <div className='w-[88%] flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>{ct.title}</h1>

            <div className='flex'>
              <Link to={`/admin-dashboard/categories/update/${ct._id}`} >
              <MdEditNote className='cursor-pointer text-xl text-green-800'/>
              </Link>

                <MdDelete onClick={() => handleDelete(ct._id)} className='text-xl'/>
            </div>
          </div>
      </SwiperSlide>
    })}
</Swiper>
    </div>

  )
}

export default ListCategory