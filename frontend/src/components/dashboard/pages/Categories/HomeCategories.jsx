

import axios from 'axios'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Link, Outlet } from 'react-router-dom';


const HomeCategories =  () => {

  axios.defaults.withCredentials = true;

  return (

<div className='mx-auto max-w-screen-lg flex flex-col  justify-center relative h-full'>

<div className='h-full w-full'>
<Outlet />
</div>



</div>
  )
}

export default HomeCategories