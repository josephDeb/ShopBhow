import { useContext } from "react"
import { ShopContext } from "./context/ShopContextProvider"
import { Link } from "react-router-dom"


const SearchBar = () => {
    const {fillT, values, search} = useContext(ShopContext)
  return (
    <>
<div className="w-full relative">
    <div className="flex flex-col">
        <div className="w-full ">
            <input onChange={fillT} value={values} type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search something..." required></input>
        </div>
       {values &&
          <div className='bg-white py-2 text-black w-full z-10 absolute top-10 rounded-md max-h-40 overflow-y-auto shadow-xl transition-all duration-200'>
           {search.map((sr, index) => (
                <p key={index} className='pl-4 hover:bg-yellow-300 cursor-pointer'>
           {sr.name}
            </p>
            ))}
         </div>
        }
    </div>
</div>

    </>
  )
}

export default SearchBar