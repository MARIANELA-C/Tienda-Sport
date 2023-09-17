//import {useParams, useEffect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button} from '@chakra-ui/react'

const ItemDetail= ({productos}) => {
 
  return (
    <div>
        {
           productos.map((p) => {
                return (
                    <div  key={p.id}>
                    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{p.name}</Heading>

      <Text py='2'>
     {p.descripcion}
     {p.price}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        AGREGAR AL CARRITO
      </Button>
    </CardFooter>
  </Stack>
</Card>


     </div>              
                   
            )
            })
        }
    </div>
  )
}
ItemDetail.propTypes = {
   productos:PropTypes.array.isRequired
}

export default ItemDetail