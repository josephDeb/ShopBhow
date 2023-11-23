/* eslint-disable react/prop-types */
import './App.css'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'

function HeaderD({OpenSidebar}) {
  return (
    <header className='header'>
    <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar}/>
    </div>
    <div className='header-left'>
        <BsSearch  className='icon'/>
    </div>
    <div className='header-right flex gap-2'>
        <BsFillBellFill className='icon'/>
        <BsFillEnvelopeFill className='icon'/>
        <BsPersonCircle className='icon'/>
    </div>
</header>
  )
}

export default HeaderD
