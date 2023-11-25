import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const inputStyle = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"


const Products = () => {
 const [values, setValues] = useState({
    name: "",
    description: "",
    category:"",
    price: "",
    stocks: "",
    images: ""
 })
 const [image, setImage] = useState()
 const navigate = useNavigate()
 const handleSubmit = async (e) => {
  e.preventDefault();
  const formdata = new FormData()
  formdata.append("file", image)
  await axios.post("/api/products", formdata)
  .then(result => {
    if(result.data.Status) {
      navigate("/admin-dashboard")
  } else{
      alert(result.data.Error)
  }
  })
  .catch(err => console.log(err))
}




  return (
<div className='h-screen w-full'>

<form onSubmit={handleSubmit} className="max-w-sm mx-auto centered  h-full flex-col">

  <div className="mb-5 w-full">
    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product image</label>
    <input name="file" onChange={(e) => setImage(e.target.files[0])} type="file" id="file" className={inputStyle} required></input>
  </div>

  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>
  )
}

export default Products