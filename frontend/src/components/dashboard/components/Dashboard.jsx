
import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {

  return (
    <>
    <div className='flex max-w-screen-2xl h-screen bg-[#1d2634]'>

      <Outlet/>
    </div>

    </>
  )
}

export default Dashboard