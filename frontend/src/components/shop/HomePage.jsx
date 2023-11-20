

import { useNavigate } from "react-router-dom"
import img from '../../assets/ShopBu.png'
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
    <div className='w-full xl:max-w-screen-xl xl:mx-auto relative'>
        <div className="w-full  h-[100vh] flex flex-col xl:px-28  xl:flex-row xl:pt-[44px] bg-[#F1F2eb]">
          <div className=" h-[440px] w-full xl:text-start items-center flex pl-4 flex-col justify-end gap-4  xl:justify-center text-center z-[44]">
                <h1 className="text-4xl text-black  font-extrabold xl:w-[620px] xl:mr-auto xl:text-5xl">
                  Buy and sell your books <span className=" text-4xl text-yellow-800  xl:text-5xl">for the best prices!</span>
                </h1>

                <p className="w-[380px] mr-auto xl:w-[570px] xl:mr-auto text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi incidunt ducimus sit ad unde officia cupiditate suscipit. Alias, animi ipsum dolor sit amet.</p>

                <div onClick={() => handleShopNow()} className="hidden xl:flex justify-start items-center w-full">
               <button className="tracking-wide text-white transition-colors duration-200 transform bg-yellow-800 rounded-md hover:bg-yellow-700 focus:outline-none focus:bg-yellow-500 xl:w-[242px] py-3 letterSpacingMB font-semibold">SHOP NOW</button>
               </div>
          </div>


          <div className="w-full h-[440px]">
              <img src={img} className="w-full h-[440px]"/>
          </div>


          {/* Mobile Device button*/}
          <div onClick={() => handleShopNow()} className="w-full flex justify-center items-center xl:hidden mb-12 ">
               <button className=" text-w px-12 py-3 bg-yellow-800 text-white rounded-lg">SHOP NOW</button>
          </div>
              
           
        </div>
    </div>
  )
}

export default HomePage