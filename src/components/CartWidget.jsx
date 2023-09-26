
import {useContext} from  'react'
import {CartContext} from '../context/ShoppingCartContext'

const CartWidget = () => {
   const {counter} = useContext (CartContext)
  
  return (
    <>
    🛒
     <p>{counter}</p>

    </>
  )
}

export default CartWidget