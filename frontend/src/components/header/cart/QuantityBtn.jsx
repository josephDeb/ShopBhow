/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ShopContext } from "../context/ShopContextProvider"


const QuantityBtn = ({id, amount, ct}) => {
    const {addCart, handleInput, descraseCart} = useContext(ShopContext)
  return (
<form className="xl:max-w-xs mx-auto manjari w-[80px] xl:w-full">

    <div className="relative flex items-center max-w-[8rem]">
        <button onClick={() => descraseCart(ct,id)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg xl:p-3 p-1 xl:h-11 h-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg className="xl:w-3 xl:h-3 w-2 h-2 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
            </svg>
        </button>
        <input onChange={(e) => handleInput(e, id)} type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full  xl:p-3 p-1 xl:h-11 h-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`${amount}`} required></input>
        <button onClick={() => addCart(ct,id)} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg  xl:p-3 p-1 xl:h-11 h-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg className="xl:w-3 xl:h-3 w-2 h-2 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>

</form>

  )
}

export default QuantityBtn