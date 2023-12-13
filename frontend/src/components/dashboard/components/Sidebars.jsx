/* eslint-disable react/prop-types */
import './App.css'
import 
{BsCart3, BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, 
 BsArchiveFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> SHOP
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to={'/admin-dashboard'} className='flex items-center'>
                    <BsGrid1X2Fill className='icon'/>
                    <h4>Dashboard</h4>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link className='flex items-center'>
                    <BsArchiveFill className='icon'/>
                    <h4>Products</h4>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link className='flex items-center'>
                    <BsFillGrid3X3GapFill className='icon'/>
                    <h4>Orders</h4>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to={'/admin-dashboard/categories'} className='flex items-center'>
                    <BsPeopleFill className='icon'/>
                    <h4>Categories</h4>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link className='flex items-center'>
                    <BsGrid1X2Fill className='icon'/>
                    <h4>Customers</h4>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link className='flex items-center'>
                    <BsGrid1X2Fill className='icon'/>
                    <h4>Coupon</h4>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link className='flex items-center'>
                    <BsGrid1X2Fill className='icon'/>
                    <h4>Brand</h4>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link className='flex items-center'>
                    <BsGrid1X2Fill className='icon'/>
                    <h4>Sign out</h4>
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar