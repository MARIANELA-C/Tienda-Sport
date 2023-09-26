import {createContext, useState} from "react"
export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children}) =>{
    const [counter, setCounter] = useState(0)
    const [ocultar, setOcultar] = useState(false)
    
    const increment =() => {
        if (counter < 10){
            setCounter(counter + 1)
        }
    }
     const decrement =() => {
        if(counter > 0){
            setCounter(counter - 1)
        }
     }
     const reset =() =>{
        setCounter(0)
     }
   
     const onAdd = () => {
        alert(`Agregaste a tu compra ${counter} productos`)
        setOcultar(true)
     }



    return (
      
        <CartContext.Provider value={{ocultar, setOcultar, counter, setCounter, onAdd, increment, decrement, reset}}>
            {children}
        </CartContext.Provider>
    )
    
}
export default ShoppingCartProvider