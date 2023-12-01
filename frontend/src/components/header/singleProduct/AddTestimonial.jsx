import React from 'react'
import Ratings from './Ratings'

const AddTestimonial = () => {
  return (
    <div className='h-[240px] flex flex-col w-[90%] gap-2 xl:w-[90%]'>
        <h1 className='text-xl'>Product Reviews (44)</h1>

        <textarea className=' h-[88px] pl-2 pt-1 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'>

        </textarea>
        
        <div className='w-full flex items-center gap-2'>
            <Ratings />
        </div>

        <div className='w-full h-[44px] flex items-center'>
            <button className='bg-blue-500 text-white w-[152px] h-[35px]'>Add comment</button>
        </div>
    </div>
  )
}

export default AddTestimonial