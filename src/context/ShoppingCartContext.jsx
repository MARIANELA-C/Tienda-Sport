import {createContext, useState} from "react"
export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children}) =>{
   const [cartArray, setCartArray]= useState ([])

   const addToCart = (counter) =>{
    alert(`Agregaste a tu compra ${counter} productos`)
   }


    return (
      
        <CartContext.Provider value={{cartArray, setCartArray, addToCart}}>
            {children}
        </CartContext.Provider>
    )
    
}
export default ShoppingCartProvider