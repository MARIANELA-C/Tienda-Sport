
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import PrimerComponente from './components/PrimerComponente'

function App() {
  const [product, setProduct]= useState([])

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/")
    const data = await response.json()

    return data
  }

  useEffect(() => {
    getProducts().them((product) => setProduct(product))
  }, [])

  
  return (
    <>
    <NavBar/>  
    <ItemListContainer/>
    {
      product.map((p)=>{
        return (

          <PrimerComponente key={p.id} title={p.title} price={p.price}/>
        )
      })
    }
    </>
  

    
  )
}

export default App
