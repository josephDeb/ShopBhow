import check from '../../assets/firework.gif'
import arrow from '../../assets/arrow-right.gif'
import sports from '../../assets/24.jpg'
import gadget from '../../assets/gadget.jpg'
import women from '../../assets/17.jpg'
import men from '../../assets/19.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

const collections = [
  {
  title: "Sports",
  image: sports,
  },
  {
    title: "Gadget",
    image: gadget,
  },
  {
    title: "Women",
    image: women,
  },
  {
    title: "Men",
    image: men,
  },

]
console.log(collections[0].image)
const Collections = () => {
  return (
    <div className='w-full h-[260px] bg-[#f1f2eb] centered flex flex-col gap-2'>

<div className='w-[90%] mx-auto flex items-center justify-between'>
         <div className='flex items-center'>
             <img src={check} className='w-10'/>
             <h1 className='font-bold '>Collections</h1>
         </div>

         <div className='flex items-center gap-1'>
               <img src={arrow} className='w-10 h-10 '/>
               <h1 className='font-bold '>View all</h1>
         </div>
      </div>

    <Swiper
    breakpoints={{
      320: {slidesPerView: 3, spaceBetween: 8},
      640:{slidesPerView: 4, spaceBetween: 32},
      1260:{slidesPerView:5, spaceBetween: 32},
    }}
    spaceBetween={8}
    autoplay={true}
    freeMode={true}
    modules={[FreeMode, Pagination]}
    className="mySwiper w-[90%] xl:w-full"
    >
        {collections.map((cl, i) => {
          return <SwiperSlide key={i} className='w-[100px] h-[180px] bg-white flex flex-col shadow-xl relative rounded-lg'>

          <img src={collections[i].image} className='h-full w-full rounded-lg'/>
      
          <div className='absolute w-full h-[53px] bg-black/80 bottom-0 rounded-lg centered px-1'>
              <h1 className='text-white font-bold manjari'>{collections[i].title}</h1>
          </div>
         </SwiperSlide>
        })}
    </Swiper>

    </div>
  )
}

export default Collections