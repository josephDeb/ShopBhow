import { useEffect, useState } from "react"
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
const inputStyle = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"


const UpdateProduct = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stocks: "",
    category: "",
 })



  useEffect(() => {
    axios.defaults.withCredentials = true;
      axios.get("/api/category/categories")
      .then(res => {
        setCategories(res.data.Result)
        console.log(res.data.Result)
      }).catch(err => console.log(err))
  }, [])

  useEffect(() => {
        axios.get("/api/products/"+id)
        .then(res => {
            setProduct(res.data.single)
            console.log(res.data.single)
        }).catch(err => console.log(err))
  }, [id])

 const handleSubmit = async (e) => {
  e.preventDefault();
  await axios.put("/api/products/"+id, product)
  .then(result => {
    if(result.data.Status) {
      alert("updated")
      navigate("/admin-dashboard/products")
      console.log(result.data)
  } else{
      alert(result.data.Error)
  }
  })
  .catch(err => console.log(err))
}
  return (
<div className='h-screen w-full'>

    <h1>Update product</h1>

<form onSubmit={handleSubmit} className="max-w-sm mx-auto centered  h-full flex-col">

<div className="mb-5 w-full">
    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input name="name" value={product.name} onChange={(e) => setProduct({...product, name:e.target.value})} type="text" id="name" placeholder="Enter a product name" className={inputStyle} required></input>
</div>
<div className="mb-5 w-full">
    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <textarea name="description" value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} type="text" id="description" placeholder="Enter a product description" className={inputStyle} required></textarea>
</div>


<div className="mb-5 w-full">
    <label htmlFor="stocks" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stocks</label>
    <input name="stocks" value={product.stocks} onChange={(e) => setProduct({...product, stocks: e.target.value})} type="number" id="stocks" placeholder="Enter a product stocks" className={inputStyle} required></input>
</div>

<div className="mb-5 w-full">
    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
    <input name="price" value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} type="number" id="price" placeholder="Enter a product price" className={inputStyle} required></input>
</div>


  <div className="mb-5 w-full flex justify-start items-center gap-2">
    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
    <select name="category" id="category" value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})}>
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

export default UpdateProduct