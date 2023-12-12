/* eslint-disable react/prop-types */

import { createContext,useEffect,useState } from "react"
const defaultVal = {}
export const ShopContext = createContext(defaultVal)
import axios from 'axios'
import {toast} from 'react-toastify'

const ShopContextProvider = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [values, setValue] = useState()
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [search, setSearch] = useState(products)

  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const defaultProducts = ls ? JSON.parse(ls.getItem("cart")) : [];
  const [cart, setCart] = useState(defaultProducts || [])


  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    ls?.setItem('cart', JSON.stringify(cart));
  })
  useEffect(() => {
    if (ls && localStorage.getItem('cart')) {
      setCart(JSON.parse(ls.getItem("cart")))
    }
  }, [])
  axios.defaults.withCredentials = true;
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
    const total = cart.reduce((a, c) => {
      return a + c.price * c.amount;
    }, 0)
    setTotal(total)
  }, [cart])



  const filterItems = (cat) => {
      const newItems = products.filter((newval) => newval.category === cat)
      setSearch(newItems)
  }

  const fillT = (e) => {
      setValue(e.target.value)
      setSearch(products.filter(f => f.name.toLowerCase().includes(e.target.value)))
  }


  const decreaseCart = (data, id) => {
    const cartItem = cart.find((item) => {
      return item._id === id
    })

    
    if(cartItem) {

      const newCart = cart.map((item) => {
        if(item._id === id) {
  
          if(cartItem.amount === 0) {
            
            return {...item, amount: cartItem.amount};
          } else {
            setAmount(cartItem.amount - 1);
            return {...item, amount: cartItem.amount - 1};
          }
        } else {
          return item
        }
      });
      setCart(newCart)

    } else {
      setCart([...cart])
    }
  }

  const addCart = (data,id) => {
    const newItem = {...data, amount: 1}
    setCart([...cart, newItem])
    const cartItem = cart.find((item) => {
      return item._id === id
    });
    toast.success("Successfuly increament +1", {
      theme: "colored"
    })
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



 const removeCart = (id) => {
  const newCart = cart.filter((item) => {
    return item._id !== id
  })
  setCart(newCart)
}



const handleInput = (e, id) => {
    const value = parseInt(e.target.value)
    console.log(value)

    const cartItem = cart.find((item) => {
      return item._id === id
    })

    if(cartItem) {
      const newCart = cart.map((item) => {
        if(item._id === id) {
          if(isNaN(value)) {
            setAmount(1)
            return {...item, amount: 1}
          } else {
            setAmount(value)
          }
          return {...item, amount: value}
        } else {
            return item
        }
      });
      setCart(newCart)
    }
 
}


const clearCart = () => {
  setCart([])
}


const logout = () => {
  window.localStorage.clear()
  window.location.href = '/login'
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
    decreaseCart,
    addCart,
    removeCart,
    cart,
    amount,
    total,
    handleInput,
    clearCart,
    logout
  }


  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider