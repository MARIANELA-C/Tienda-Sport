
import {useContext} from 'react'
import {CartContext} from '../context/ShoppingCartContext'



const Cart = () => {
  const {onAdd} = useContext (CartContext)
  console.log ()
  return (
     <div>
      {onAdd}
      </div>
  )
}

export default Cart