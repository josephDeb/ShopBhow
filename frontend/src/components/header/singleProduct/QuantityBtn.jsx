/* eslint-disable react/prop-types */

import { set } from "mongoose"
import { useState } from "react"

const QuantityBtn = ({amount, singleProduct, id, addCart}) => {

    const [count, setCount] = useState(0)

    const decreaseCount = () => {
        if(count === 0) {
            return setCount(0)
        } else {
            return setCount(count -1)
        }
    } 
    return (
  <form className="mx-auto manjari ">
  
      <div className="relative flex items-center max-w-[8rem]">
          <button onClick={() => decreaseCount()}  type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg xl:p-3 p-2 xl:h-11 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <svg className="xl:w-3 xl:h-3 w-2 h-2 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
              </svg>
          </button>
          <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full  xl:p-3 p-2 xl:h-11 h-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`0`} required></input>
          <button onClick={() => addCart(singleProduct, id)} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg  xl:p-3 p-2 xl:h-11 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <svg className="xl:w-3 xl:h-3 w-2 h-2 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
              </svg>
          </button>
      </div>
  
  </form>
  
    )
  }
  
  export default QuantityBtn