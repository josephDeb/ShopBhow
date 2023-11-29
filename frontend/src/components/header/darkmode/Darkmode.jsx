import darkmode from '../../../assets/darkmode.gif'
import './style.css'
import {IoMdMoon, IoMdSunny} from 'react-icons/io'

const Darkmode = () => {
  return (
    <div className='w-full h-[220px]  flex centered xl:hidden relative'>
        <img src={darkmode} className='w-[90%] mx-auto rounded-md h-[220px] shadow-xl xl:w-full '/>

        <p className='absolute w-[300px] bottom-12 text-white font-semibold  manjari '>You can change your display to a dark background using a dark mode</p>
        {/*dark mode btn */}
      <div className='absolute w-[80%] bottom-4 flex  justify-end'>
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