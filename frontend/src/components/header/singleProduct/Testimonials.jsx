// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import profile from '../../../assets/mimiyah.jfif'
import profile2 from '../../../assets/rendon.jfif'
import profile3 from '../../../assets/kwen.jpg'
import {FreeMode, Pagination, Autoplay} from 'swiper/modules';
import {FaQuoteLeft} from 'react-icons/fa'
const Testimonials = () => {
  const testimonialData = [
    {
      message: 'Wala akong masabi sa item na to yuhhhh!',
      avatar: profile,
      name: 'Mimiyuuuh',
      job: 'Vlogger & Youtuber',
      star: 4
    },
    {
      message: 'Focus sa goal bili kalang ng bili! Iwan mo kahit pamilya mo pa!',
      avatar: profile2,
      name: 'Jerome Apduhan',
      job: 'Photographer & Manyak ',
      star: 5
    },
    {
      message: 'OMG! The item was delivered in a timely manner, and the packaging ensured that it arrived in perfect condition.',
      avatar: profile3,
      name: 'Jan Patrick Abayon',
      job: 'Guitarist & Pogiii',
      star: 1
    }
  ]


  return (
    <div className='xl:h-[530px] xl:flex xl:flex-col xl:justify-center xl:items-center h-[350px] w-[90%] mx-auto manjari gap-8'>

      <div className='w-full h-[62px] xl:text-center text-center'>
          <h1 className='text-2xl xl:font-bold'>Testimonials</h1>
      </div>

      <Swiper
       breakpoints={{
        320: {slidesPerView: 1, spaceBetween: 8},
        640:{slidesPerView: 4, spaceBetween: 8},
        1260:{slidesPerView:3, spaceBetween: 17},
      }}
      spaceBetween={8}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[FreeMode,Autoplay, Pagination]}
      className="mySwiper w-[100%] xl:w-full"
      >
        {testimonialData.map((ts, i) => {
          return <SwiperSlide className='w-full h-[280px] flex flex-col justify-between gap-6 manjari ' key={i}>
            <div className='w-full  centered flex flex-col gap-4'>
                  <FaQuoteLeft className='text-4xl text-red-500'/>
            </div>

            <div className='w-full centered'>
                <p className='text-xl font-bold text-center'>{ts.message}</p>
            </div>

              <div className='w-full centered flex flex-col gap-2 '>
                <img src={ts.avatar} className='w-[88px] rounded-full bg-red-500 h-[88px] object-cover'/>
                <div className='w-full centered'>
                <div className='h-[17px] w-[17px] rounded-full bg-red-500'></div>
                </div>
              </div>
              
          </SwiperSlide>
        })}
      </Swiper>

    </div>
  )
}

export default Testimonials