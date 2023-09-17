import { Card, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
//import ItemDetailContainer from './ItemDetailContainer'

const Item = ({ name, id }) => {
  return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup>
        <Link to={`/item/${id}`}>
        <Button variant='solid' colorScheme='blue' >
          Detalle
        </Button>
        </Link>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}
Item.propTypes ={
  productos:PropTypes.array.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  stock:PropTypes.number.isRequired,
  id:PropTypes.number.isRequired
}

export default Item