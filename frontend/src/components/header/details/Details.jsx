/* eslint-disable react/prop-types */
import img3 from '../../../assets/16.jpg'
import img1 from '../../../assets/wallet.png'
import img2 from '../../../assets/voucher.png'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { BsArrowBarLeft } from 'react-icons/bs';
import axios from 'axios'


const Details = ({setIsOpen, isOpen}) => {

  const isAdmin = true;
  const navigate = useNavigate()

  const handleLogout = async () => {
    await axios.post("/api/users/logout")
    .then(res => {
      console.log(res.data)
      navigate("/login")
    }).catch(err => console.log(err))
  } 

  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className="w-[240px] h-full bg-[#f3f4ef] flex flex-col justify-center items-center relative">
        {/*Arrow Exit */}
      <div className='absolute right-0 top-[4px] cursor-pointer'>
          <BsArrowBarLeft  onClick={() => setIsOpen(!isOpen)}   className='text-3xl hover:scale-125'/>
      </div>

        {currentUser ? <div className='h-full w-full flex flex-col justify-between items-center '>

          <div className=' h-[170px] w-full flex flex-col justify-center items-center px-2 gap-4 manjari'>
              <div className='w-full px-2 flex justify-start items-center gap-3 '>
                 <div className='w-[71px] h-[71px]  rounded-full border-[#ed1d24]'>
                    <img src={img3} className='w-full h-full rounded-full'/>
                 </div>

                <div className='flex justify-start items-start flex-col gap-1 text-[12px]'>
                    <div className='centered gap-2 font-semibold'>
                    <img src={img1} className='h-6 w-6'/>
                    <p>$1800.00</p>
                    </div>

                    <div className='centered gap-1 font-semibold'>
                    <img src={img2} className='h-6 w-6 mr-1'/>
                    <p>Voucher:</p>
                    <p>18</p>
                    </div>
                </div>
              </div>

              <div className='w-full centered flex-col gap-1'>
                  <h1 className='text-[12px] manjari font-semibold text-center'>Welcome, Joseph louise de Leon!</h1>
              </div>
          </div>

        <div className='flex flex-col w-full justify-center items-start '>
        <Link className='h-12 w-full  flex justify-start items-center hover:bg-gray-300/60 text-[14px] hover:text-[#ed1d24] manjari pl-3' to={'/home'}>Profile</Link>
        {isAdmin ? <Link  className='h-12 w-full  flex justify-start items-center hover:bg-gray-300/60 text-[14px] hover:text-[#ed1d24] manjari pl-3' to={'/admin-dashboard'} >Dashboard</Link>
          :
          <></>
         }
        <Link className='h-12 w-full  flex justify-start items-center hover:bg-gray-300/60 text-[14px] hover:text-[#ed1d24]  manjari pl-3' to={'/home'}>My Orders</Link>
        <Link className='h-12 w-full  flex justify-start items-center hover:bg-gray-300/60 text-[14px] hover:text-[#ed1d24]  manjari pl-3' to={'/home'}>My Wishlist</Link>
        <Link className='h-12 w-full  flex justify-start items-center hover:bg-gray-300/60 text-[14px] hover:text-[#ed1d24]  manjari pl-3' to={'/home'}>Notification</Link>
        <Link className='h-12 w-full  flex justify-start items-center hover:bg-gray-300/60 text-[14px] hover:text-[#ed1d24]  manjari pl-3' to={'/home'}>Shop Pages</Link>
        <Link className='h-12 w-full  flex justify-start items-center hover:bg-gray-300/60 text-[14px] hover:text-[#ed1d24]  manjari pl-3' to={'/home'}>Settings</Link>
        <Link onClick={() => handleLogout()} className='h-12 w-full  flex justify-start items-center hover:bg-gray-300/60 text-[14px] hover:text-[#ed1d24]  manjari pl-3' to={'/home'}>Sign out</Link>

        </div>

        <div className='h-[150px] w-full flex justify-center items-center  gap-1  manjari flex-col'>
          <div className='w-full centered font-extrabold text-3xl'>
            <h1>Shop<span className='text-[#ed1d24]'>Bhow</span></h1>
          </div>

          <p className='text-[11px]'>@ created by Joseph louise de Leon</p>
        </div>

        </div>

        :
        <div className='h-[60%] w-full flex flex-col justify-center items-center gap-8'>
          <Link to={'/login'}>Login</Link>
          <Link to={'/login'}>Register</Link>
        </div>}
</div>
  )
}

export default Details