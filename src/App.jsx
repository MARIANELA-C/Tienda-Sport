import ShoppingCartContext from "./context/ShoppingCartContext"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from "./components/Home"
import About from "./components/About"
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <>
    <ShoppingCartContext>
    <BrowserRouter>

    <NavBar/> 

    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
    <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
    <Route exact path="/categoria/:categoria" element={<ItemListContainer/>}/>
    </Routes> 
    
    </BrowserRouter>
    </ShoppingCartContext>
    </>
  

    
  )
}

export default App
