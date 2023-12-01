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
  const [cart, setCart] = useState([])

  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([])
  const [amount, setAmount] = useState()
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

  useEffect(() => {
      if (cartProducts?.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cartProducts))
      }
  }, [cartProducts])

  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem("cart")))
    }
  }, [])


  const filterItems = (cat) => {
      const newItems = products.filter((newval) => newval.category === cat)
      setSearch(newItems)
  }

  const fillT = (e) => {
      setValue(e.target.value)
      setSearch(products.filter(f => f.name.toLowerCase().includes(e.target.value)))
  }
  const addCart = (data,id) => {
    const newItem = {...data, amount: 1}
    setCart([...cart, newItem])

    
    const cartItem = cart.find((item) => {
      return item._id === id
    });
    console.log(cartItem)

    if(cartItem) {
      const newCart = cart.map((item) => {
        if(item._id === id) {
          setAmount(cartItem.amount + 1);
          return {...item, amount: cartItem.amount + 1};
        } else {
          return item
        }
      });
      setCart(newCart)

    } else {
      setCart([...cart, newItem])
    }
 }

 console.log(cart)


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
    setCartProducts,
    cartProducts,
    addCart,
    cart
  }


  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider