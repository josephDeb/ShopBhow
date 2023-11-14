/* eslint-disable react/prop-types */

import { createContext,useState } from "react"
const defaultVal = {}
export const ShopContext = createContext(defaultVal)

const ShopContextProvider = (props) => {

  const [isOpen, setIsOpen] = useState(true);
  
     
  const value = {
    setIsOpen,
    isOpen
  }
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider