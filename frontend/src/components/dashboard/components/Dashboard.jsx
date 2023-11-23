
import { useState } from 'react'
import './App.css'
import Header from './HeaderD'
import Sidebar from './Sidebars'
import { Outlet } from 'react-router-dom'
import HomeD from './HomeD'

const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className='w-full h-full'>
          <Outlet/>
      </div>
    </div>
    
    </>
  )
}

export default Dashboard