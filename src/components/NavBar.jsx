
import CartWidget from './CartWidget'
import {Menu, MenuButton, Button, MenuList, MenuGroup, MenuItem, Flex, Box, Heading, Spacer} from '@chakra-ui/react'


const NavBar = () => {
  return (
    
    <>
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box p='2'>
        <Heading size='md'>Tienda Sport</Heading>
      </Box>
  <Spacer />
      <Menu>
       <MenuButton as={Button} colorScheme='pink'>
        Categorias
       </MenuButton>
      <MenuList>
        <MenuGroup title='Categorias'>
          <MenuItem>Zapatillas</MenuItem>
          <MenuItem>Camperas</MenuItem>
          <MenuItem>Legins</MenuItem>
          <MenuItem>Gorras</MenuItem>
        </MenuGroup>
       </MenuList>
     </Menu>
  
<Button colorScheme='pink'><CartWidget/></Button>
</Flex>
  
 
    </>
  )
}

export default NavBar