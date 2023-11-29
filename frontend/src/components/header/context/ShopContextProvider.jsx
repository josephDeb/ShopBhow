/* eslint-disable react/prop-types */

import { createContext,useEffect,useState } from "react"
const defaultVal = {}
export const ShopContext = createContext(defaultVal)
import axios from 'axios'

const ShopContextProvider = (props) => {

  const [isOpen, setIsOpen] = useState(true);
  const [values, setValue] = useState()
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [search, setSearch] = useState(products)

  useEffect(() => {
      axios.get("/api/category/categories")
      .then(res => {
          setCategory(res.data.Result)
      }).catch(err => console.log(err))

      axios.get("/api/products")
      .then(res => {
          setProducts(res.data.Result)
          setSearch(res.data.Result)
      }).catch(err => console.log(err))
   }, [])


  const filterItems = (cat) => {
      const newItems = products.filter((newval) => newval.category === cat)
      setSearch(newItems)
  }

  const fillT = (e) => {
      setValue(e.target.value)
      setSearch(products.filter(f => f.name.toLowerCase().includes(e.target.value)))
  }


  const value = {
    setIsOpen,
    isOpen,
    fillT,
    filterItems,
    category,
    setCategory,
    products,
    setProducts,
    search,
    setSearch,
    values,
    setValue,
  }


  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider