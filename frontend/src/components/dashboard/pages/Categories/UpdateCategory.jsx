/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'


   //   allow read;
   //   allow write: if
  //  request.resource.size < 2 * 1024 * 1024 &&
  //  request.resource.contentType.matches('image/.*')

const UpdateCategory =  ({isOpen, setIsOpen, title, setTitle,}) => {


const handleAdd = async (e) => {
  e.preventDefault()

   await axios.put("/api/category/")
   .then(res => {
    alert("Updated Successfully")
    window.location.reload()
    setIsOpen(!isOpen)
    console.log(res)
    console.log(res)
   }).catch(err => console.log(err))
}
  return (
    <div className="w-full bg-[#1d2634] h-[440px] mt-4 ">
  
    <form onSubmit={handleAdd} className="max-w-sm mx-auto centered  h-full flex-col">
      <Link to={'/admin-dashboard/categories'} className='text-black font-semibold text-xl'>Back</Link>
      <div className='w-full text-center mb-8'>
          <h1 className='text-4xl font-bold text-white'>Update Category</h1>
      </div>
  <div className="mb-5 w-full">
    <input name='title' value={title} onChange={(e) => setTitle({title: e.target.value})} type="text" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example: Clothes" required></input>
  </div>


  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
    </div>
  )
}

export default UpdateCategory