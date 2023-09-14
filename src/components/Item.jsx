import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'
import PropTypes from 'prop-types'

const Item = ({ name, price, stock }) => {
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
        <Text>
         {stock}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          $ {price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Detalle
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}
Item.propTypes ={
  productos:PropTypes.array.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  stock:PropTypes.number.isRequired
}

export default Item