import { useEffect, useState } from 'react'
import trash from '../../../../assets/delete.png'

import axios from 'axios'


import { Swiper, SwiperSlide } from 'swiper/react';
import {MdOutlineNoteAdd} from 'react-icons/md'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {FreeMode, Pagination, Autoplay} from 'swiper/modules';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2';

import monkey from '../../../../assets/monkey.png'
import AdminMenu from '../../AdminMenu';

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
  <>
  <AdminMenu />

  <div className='max-w-screen-xl flex flex-col text-[#F1EBFF] manjari'>
      <div className='w-full centered flex-col'>
      <div className='w-[800px] h-[130px] centered '>
        <h1 className='text-4xl text-[#F4F7FF] font-bold'>Category list</h1>
      </div>
      <div className='w-full h-[62px] flex items-center'>
          <Link to={'/admin-dashboard/categories/add'}  className='centered gap-1 h-[44px] w-[180px] bg-[#FF6D00]'><MdOutlineNoteAdd className='text-2xl'/>Add Category</Link>
      </div>
      </div>



      <div className='w-[80%] mx-auto h-[350px] mt-[71px]'>
      <Swiper
        breakpoints={{
          320: {slidesPerView: 3, spaceBetween: 8},
          640:{slidesPerView: 4, spaceBetween: 8},
          1260:{slidesPerView:4, spaceBetween: 17},
        }}
        spaceBetween={8}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        freeMode={true}
        modules={[FreeMode,Autoplay, Pagination]}
        className="mySwiper w-[80%] xl:w-full "
      >

        {listCt.map((pr, i) => {
          return <SwiperSlide key={i} className='w-full h-[180px] bg-white flex flex-col shadow-xl relative rounded-lg'>
              <img src={"../../../../../images/"+pr.image} className='a object-cover  h-full rounded-lg '/>
              <div className='w-full h-[53px] absolute bottom-0 bg-black/80 centered rounded-md'>
                    <h1>{pr.title}</h1>
              </div>
              <div className='w-full h-full absolute right-[17px] top-1  hover:opacity-100 opacity-0 hover:-right-[8px] transition-all duration-200'>
                  <img src={trash} onClick={() => handleDelete(pr._id)}   className='w-6 cursor-pointer shadow-xl'/>
              </div>
      </SwiperSlide>
        })}

      </Swiper>

      </div>
  </div>

  <div className='fixed top-[44px] right-0'>
      <img src={monkey} className='w-[260px]'/>
  </div>
  </>

  )
}

export default ListCategory