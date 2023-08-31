import { Center, Square, Circle } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <>
    <Center bg='white' h='100px' color='black'>
    <h2>{greeting}</h2>
  
</Center>
    </>
  )
}

export default ItemListContainer