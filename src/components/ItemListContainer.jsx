import ItemList from './ItemList'
import {useParams} from 'react-router-dom'


const ItemListContainer = () => {
  const {categoria} = useParams()
  const productos = [
    {id: 1, name: "Producto A", price: 1000, descripcion: "Descripcion del producto A", categoria: "Camperas"},
    {id: 2, name: "Producto B", price: 2000, descripcio: "Descripcion del producto B", categoria: "Legins"},
    {id: 3, name: "Producto C", price: 3000, descripcion: "Descripcion del producto C", categoria: "Gorras"}
  ]
  const mostrarProductos = new Promise((resolve, reject) =>{
    
    if (productos.length > 0){
      setTimeout(() =>{
        resolve(productos)
      }, 2000)
    } else {
      reject("No se pueden mostrar los productos")
    }
  })

  mostrarProductos
  .then((resultado) =>{
    console.log(resultado)
  })
    .catch((error) =>{
    console.log(error)
  })
  const filteredProducts=productos.filter((producto)=>producto.categoria===categoria)

    return (
    <>
  
   <ItemList productos={filteredProducts}/>
  
    </>
  )
}

export default ItemListContainer