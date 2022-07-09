import React, { useState , createContext,useContext} from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([])
    
    return (<CartContext.Provider value={{cart,setCart}}>
        {children}
        </CartContext.Provider>)
}

export const CartState = () => {
    return useContext(CartContext);
  };