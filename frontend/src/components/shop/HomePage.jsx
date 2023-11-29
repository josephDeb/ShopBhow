

import { Link, useNavigate } from "react-router-dom"
import img from '../../assets/shopping-bag.png'
import {useSelector} from 'react-redux'
const HomePage = () => {
  const navigate = useNavigate();
 
const {currentUser} = useSelector(state => state.user)

  const handleShopNow = () => {
    
    if(currentUser) {
        navigate("/home")
    } else {
        navigate("/login")
    }
    
  }

  return (
    <div className='w-full xl:max-w-screen-xl xl:mx-auto h-screen manjari'>
        {/*Mobile responsive*/}
        <div className="w-full h-[100%] my-auto centered flex-col xl:hidden">
           <div className="w-full h-[350px] centered relative xl:flex">
              <img src={img} className="w-[200px] h-[200px]"/>
              <div className="centered flex-col absolute bottom-0 ">
                <p className="text-4xl">Shop<span className="text-red-500">Bhow</span></p>
                <p>Big Deals, Big Sales</p>
              </div>
           </div>

           <div className="h-[170px] centered">
               <Link to={'/login'} className="getStaredBtn manjari">Get stared</Link>
           </div>
        </div>

        <div className="w-[60%] h-full flex justify-between items-center mx-auto">
            <div className="flex justify-between items-center">
            <img src={img} className="w-[260px]"/>
             <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl">Shop<span className="text-red-500">Bhow</span></h1>
              <p>Big Deals, Big Sales</p>
             </div>
            </div>

            <div className="h-[170px] centered ">
               <Link to={'/login'} className="getStaredBtn manjari">Get stared</Link>
           </div>
        </div>
    </div>
  )
}

export default HomePage