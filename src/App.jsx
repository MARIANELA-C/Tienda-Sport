

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const greeting = "Bienvenidos"

  return (
    

    
    <>
    <NavBar/>  
    <ItemListContainer greeting={greeting}/>
    </>
  

    
  )
}

export default App
