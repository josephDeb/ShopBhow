import { useContext } from "react"
import { ShopContext } from "./context/ShopContextProvider"
import { Link, useNavigate, useParams } from "react-router-dom"


const SearchBar = () => {
    const {fillT, values, search, on} = useContext(ShopContext)
    const navigate = useNavigate()
  return (
    <>
<div className={`w-full relative ${on ? "bg-[#171717]" : ""} `}>
    <div className="flex flex-col">
        <div className="w-full ">
            <input onChange={fillT} value={values} type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg " placeholder="Search something..." required></input>
        </div>
       {values &&
          <div className='bg-white py-2 text-black w-full z-10 absolute top-10 rounded-md max-h-40 overflow-y-auto shadow-xl transition-all duration-200'>
           {search.map((sr, index) => (
                <p onClick={() => navigate(`/home/${sr._id}`)} to={"/home/"+sr._id} key={index} className='pl-4 hover:bg-yellow-300 cursor-pointer'>
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