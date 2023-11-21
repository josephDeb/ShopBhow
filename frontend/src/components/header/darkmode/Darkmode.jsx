import darkmode from '../../../assets/darkmode.gif'
import './style.css'
import {IoMdMoon, IoMdSunny} from 'react-icons/io'

const Darkmode = () => {
  return (
    <div className='w-full h-[230px] bg-[#f1f2eb] flex relative centered'>
        <img src={darkmode} className='w-[90%] mx-auto rounded-md xl:w-[62%] h-[200px]'/>

        <p className='absolute w-[350px] text-white font-semibold left-[35px] top-[124px] manjari'>You can change your display to a dark background using a dark mode</p>
        {/*dark mode btn */}
      <div className='absolute right-[35px] bottom-[35px]'>
        <input type='checkbox' className='checkbox' id='checkbox'></input>
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon"><IoMdMoon /></i>
          <i className="fas fa-sun"><IoMdSunny /></i>
          <span className="ball"></span>
        </label>
      </div>
    </div>
  )
}

export default Darkmode