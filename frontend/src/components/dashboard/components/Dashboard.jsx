
import { useState } from 'react'
import './App.css'
import Header from './HeaderD'
import Sidebar from './Sidebars'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <>
    <div className='flex max-w-screen-2xl h-screen bg-[#1d2634]'>

   
      <Outlet/>
    </div>

    </>
  )
}

export default Dashboard