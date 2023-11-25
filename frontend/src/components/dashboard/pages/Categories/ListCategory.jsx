import { useEffect, useState } from 'react'

import axios from 'axios'

import AddCategories from './AddCategories'
import { Swiper, SwiperSlide } from 'swiper/react';
import {MdEditNote, MdDelete, MdOutlineNoteAdd} from 'react-icons/md'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {FreeMode, Pagination, Autoplay} from 'swiper/modules';
import { Link, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';

const ListCategory = () => {

    const [listCt, setListCt] =  useState([])
    useEffect(() => {
    axios.get("/api/category/categories")
    .then(res => {
        setListCt(res.data.Result)
    
        console.log(res)
    })
    .catch(err => console.log(err))
    }, [])

    
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Do you really want to delete?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#ed1d24",
            confirmButtonText: "Yes, delete it!",
            
          })
         await axios.delete("/api/category/"+id)
        .then(res => {
            if(result.isConfirmed) {
                window.location.reload()
                console.log(res)
              }
        }).catch(err=> console.log(err))
    } 
  
  return (
  <div className='max-w-screen-xl flex flex-col text-[#F1EBFF]'>
      <div className='w-full centered flex-col'>
      <div className='w-[800px] h-[130px] centered '>
        <h1 className='text-4xl text-[#F4F7FF] font-bold'>Category list</h1>
      </div>
      <div className='w-full h-[62px] flex items-center'>
          <Link to={'/admin-dashboard/categories/add'}  className='centered gap-1 h-[44px] w-[180px] bg-[#FF6D00]'><MdOutlineNoteAdd className='text-2xl'/>Add Category</Link>
      </div>
      </div>

      <div className='w-[71%] mx-auto h-[350px] mt-[71px]'>
      <Swiper
        breakpoints={{
          320: {slidesPerView: 3, spaceBetween: 8},
          640:{slidesPerView: 4, spaceBetween: 8},
          1260:{slidesPerView:4, spaceBetween: 17},
        }}
        spaceBetween={8}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        freeMode={true}
        modules={[FreeMode,Autoplay, Pagination]}
        className="mySwiper w-[90%] xl:w-full"
      >

        {listCt.map((pr, i) => {
          return <SwiperSlide key={i} className='w-full h-[180px] bg-white flex flex-col shadow-xl relative rounded-lg '>
              <img src={"../../../../../images/"+pr.image} className='a object-cover  h-full rounded-lg '/>
      </SwiperSlide>
        })}

      </Swiper>

      </div>
  </div>

  )
}

export default ListCategory