
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import {Menu, MenuButton, Button, MenuList, MenuGroup, MenuItem, Flex, Box, Heading, Spacer} from '@chakra-ui/react'


const NavBar = () => {
  return (
    
    <>
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box p='2'>
        <Link to={"/"}>
        <Heading size='md'>Tienda Sport</Heading>
        </Link>
      </Box>
  <Spacer />
      <Menu>
       <MenuButton as={Button} colorScheme='pink'>
        Categorias
       </MenuButton>
      <MenuList>
        <MenuGroup title='Categorias'>
         
          <Link to={`/categoria/${'Camperas'}`}>
          <MenuItem>Camperas</MenuItem>
          </Link>
          <Link to={`/categoria/${'Leggins'}`}>
          <MenuItem>Leggins</MenuItem>
          </Link>
          <Link to={`/categoria/${'Gorras'}`}>
          <MenuItem>Gorras</MenuItem>
          </Link>
        </MenuGroup>
       </MenuList>
     </Menu>
  <Link to={"/cart"}>
<Button colorScheme='pink'><CartWidget/></Button>
  </Link>
</Flex>
  
 
    </>
  )
}

export default NavBar