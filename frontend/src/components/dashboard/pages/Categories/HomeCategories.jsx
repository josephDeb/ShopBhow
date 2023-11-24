import { useEffect, useState } from 'react'

import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
import AddCategories from './AddCategories'


const HomeCategories =  () => {

  const [title, setTitle] = useState("")
  const [listCt, setListCt] =  useState([])
  useEffect(() => {
  axios.get("/api/category/categories")
  .then(res => {
      setListCt(res.data.Result)
  })
  .catch(err => console.log(err))
  }, [])
  
  const [isOpen, setIsOpen] = useState(true)


  return (
    <div className="w-full h-full bg-[#1d2634]">
        <Link onClick={() => setIsOpen(!isOpen)} to={'/admin-dashboard/categories/add'}>add categoriy</Link>

        <div  className={` ${isOpen ? "-top-[107%] transition-all duration-300" : "top-0 transition-all duration-300"} flex justify-center items-center w-full xl:max-w-screen-xl h-[102vh] fixed z-[99] bg-black/80 transition-all duration-300 top-[0px] border-2`}>

                <AddCategories isOpen={isOpen} setIsOpen={setIsOpen}/>

    </div>
    </div>
  )
}

export default HomeCategories