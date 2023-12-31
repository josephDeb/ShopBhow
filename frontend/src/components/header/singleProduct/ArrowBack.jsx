import { Link, useNavigate } from 'react-router-dom'
import arrow from '../../../assets/arrow-right.gif'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'
const ArrowBack = () => {
  const {filterItems} = useContext(ShopContext)

  return (
    <div className="w-[90%] mx-auto h-[71px] flex flex-col justify-end items-start manjari">
            <Link onClick={() => filterItems("Weekly Sales")} className='flex items-center w-[220px] h-[44px] xl:mt-4 gap-2'>
                <img src={arrow} className='a rotate-180 w-8'/>
                 <h1>Back to homepage</h1>
            </Link>
            </div>
  )
}

export default ArrowBack