import { useEffect, useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const inputStyle = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"


const Products = () => {
  axios.defaults.withCredentials = true;
  const [categories, setCategories] = useState([])

  useEffect(() => {
      axios.get("api/category/categories")
      .then(res => {
        setCategories(res.data.Result)
        console.log(res.data.Result)
      }).catch(err => console.log(err))
  }, [])

 const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stocks: "",
    category: "",
    image: ""
 })
 const navigate = useNavigate()
 const handleSubmit = async (e) => {
  e.preventDefault();
  const formdata = new FormData()
  formdata.append("name", product.name)
  formdata.append("description", product.description)
  formdata.append("category", product.category)
  formdata.append("stocks", product.stocks)
  formdata.append("price", product.price)
  formdata.append("file", product.image)
  await axios.post("api/products/create", formdata)
  .then(result => {
    if(result.data.Status) {
      alert("create")
      navigate("/admin-dashboard")
      console.log(result.data)
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
    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input name="name" onChange={(e) => setProduct({...product, name:e.target.value})} type="text" id="name" placeholder="Enter a product name" className={inputStyle} required></input>
</div>
<div className="mb-5 w-full">
    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <textarea name="description" onChange={(e) => setProduct({...product, description: e.target.value})} type="text" id="description" placeholder="Enter a product description" className={inputStyle} required></textarea>
</div>


<div className="mb-5 w-full">
    <label htmlFor="stocks" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stocks</label>
    <input name="stocks" onChange={(e) => setProduct({...product, stocks: e.target.value})} type="number" id="stocks" placeholder="Enter a product stocks" className={inputStyle} required></input>
</div>

<div className="mb-5 w-full">
    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
    <input name="price" onChange={(e) => setProduct({...product, price: e.target.value})} type="number" id="price" placeholder="Enter a product price" className={inputStyle} required></input>
</div>

  <div className="mb-5 w-full">
    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product image</label>
  <input name="file" onChange={(e) => setProduct({...product, image: e.target.files[0]})} type="file" id="file" className={inputStyle} required></input>
  </div>

  <div className="mb-5 w-full flex justify-start items-center gap-2">
    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
    <select name="category" id="category" onChange={(e) => setProduct({...product, category: e.target.value})}>
        <option>Selection</option>
        {categories.map((ct, i) => {
          return <option key={i} value={ct.title}>{ct.title}</option>
        })}
    </select>
</div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>
  )
}

export default Products