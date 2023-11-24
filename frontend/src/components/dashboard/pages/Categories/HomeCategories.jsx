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

const HomeCategories =  () => {

 

  return (

<div className='mx-auto max-w-screen-lg flex flex-col  justify-center relative h-full'>

<div className='h-full w-full'>
<Outlet />
</div>



</div>
  )
}

export default HomeCategories