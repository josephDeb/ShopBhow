
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
    <div className='flex max-w-screen-2xl h-screen'>

      <div className='xl:w-[260px]'>
         <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      </div>
      <div className='flex flex-col w-full'>
      <Header OpenSidebar={OpenSidebar}/>
      <Outlet/>
      </div>
    </div>

    </>
  )
}

export default Dashboard