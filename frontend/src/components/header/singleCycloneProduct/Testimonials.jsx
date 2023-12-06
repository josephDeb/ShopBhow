// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import profile from '../../../assets/daniel3.png'
import profile2 from '../../../assets/daniel.png'
import profile3 from '../../../assets/daniel2.png'
import {FreeMode, Pagination, Autoplay} from 'swiper/modules';
import {FaQuoteLeft} from 'react-icons/fa'
const Testimonials = () => {
  const testimonialData = [
    {
      message: 'Ah, I am oh so lonely because I do not have a mama.',
      avatar: profile,
      name: 'Anya Forger',
      job: 'SPY x FAMILY',
      star: 4
    },
    {
      message: 'おならしたいのにうんちが出てしまう',
      avatar: profile2,
      name: 'Vanitas',
      job: 'Kin of the Blue Moon',
      star: 5
    },
    {
      message: 'Ano nasaktan moko diba ayos ayos',
      avatar: profile3,
      name: 'Unidentified',
      job: 'Unknown',
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
                <img src={ts.avatar} className='w-[88px] rounded-full bg-red-500 h-[88px]'/>
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