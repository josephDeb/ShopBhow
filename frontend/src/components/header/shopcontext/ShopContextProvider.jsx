/* eslint-disable react/prop-types */
import axios from 'axios'
import { createContext,useEffect,useState } from "react"
const defaultVal = {}
export const ShopContext = createContext(defaultVal)

const ShopContextProvider = (props) => {

  const [products, setProducts] = useState([])
  
  useEffect(() => {
      axios.get("/api/products")
      .then(res => setProducts(res.data.Result))
      .catch(err => console.log(err))
  }, [])
  const value = {
    products
  }
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider