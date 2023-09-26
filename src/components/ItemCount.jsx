
import {useContext} from 'react'
import {CartContext} from '../context/ShoppingCartContext'
import {ButtonGroup, Button} from '@chakra-ui/react'


const ItemCount = () => {

  const {ocultar, setOcultar, counter, setCounter, onAdd, increment, decrement, reset}= useContext (CartContext)
   
  
  return (
    <>
      {!ocultar &&(
       <>
         <ButtonGroup size='md' isAttached variant='outline'>
           
            <Button onClick={decrement}>-</Button>
            <Button>{counter}</Button>
            <Button onClick={increment}>+</Button>
          
         </ButtonGroup>

        <Button onClick={onAdd}>Agregar al carrito</Button>

        </>
    )

    }
    
    </>
  )
}

export default ItemCount























































{/* const [counter, setCounter] = useState(0)
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

 const onAdd = () => {
    alert(`Agregaste a tu compra ${counter} productos`)
    setOcultar(true)
 }
*/}