import check from '../../assets/check.gif'
import arrow from '../../assets/arrow-right.gif'
import sports from '../../assets/24.jpg'

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

<div className='w-[90%] h-[260px]  grid grid-cols-3 gap-2'>

   <div className='w-full h-[180px] bg-white flex flex-col shadow-xl relative rounded-lg'>

    <img src={sports} className='h-full w-full rounded-lg'/>

    <div className='absolute w-full h-[44px] bg-black/60 bottom-0 rounded-lg centered px-1'>
        <h1 className='text-white font-bold'>Sports</h1>
    </div>
   </div>
</div>
    </div>
  )
}

export default Collections