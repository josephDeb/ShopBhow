import { useContext } from "react"
import { ShopContext } from "./context/ShopContextProvider"
import { Link } from "react-router-dom"


const SearchBar = () => {
    const {fillT, values} = useContext(ShopContext)
  return (
    <>
<div className="w-full">
    <div className="flex">
        <div className="w-full">
            <input onChange={fillT} value={values} type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required></input>
        </div>
    </div>
</div>

    </>
  )
}

export default SearchBar