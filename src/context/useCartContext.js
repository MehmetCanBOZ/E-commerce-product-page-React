import { createContext, useState, useContext } from "react";

const CartContex = createContext();

const CartContexProvider = ({children}) => {
  const [itemNumber,setItemNumber] = useState(0);
  
  const data = {
    itemNumber,
    setItemNumber
  }

  return (
    <CartContex.Provider value={data}>
        {children}
    </CartContex.Provider>
  )
}

export {
  CartContexProvider,
  CartContex,
  useContext
}