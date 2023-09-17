import ItemList from './ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {
  const {id} = useParams()
  const productos = [
    {id: 1, name: "Producto A", price: 1000, descripcion: "Descripcion del producto A", categoria: "Herramientas"},
    {id: 2, name: "Producto B", price: 2000, descripcio: "Descripcion del producto B", categoria: "Pinceles"},
    {id: 3, name: "Producto C", price: 3000, descripcion: "Descripcion del producto C", categoria: "Talleres"}
  ]
  const mostrarProductos = new Promise((resolve, reject) =>{
    
    if (productos.length > 0){
      setTimeout(() =>{
        resolve(productos)
      }, 5000)
    } else {
      reject("No se pueden mostrar los productos")
    }
  })
  const filteredProducts=productos.filter((producto)=>producto.id==id)
  mostrarProductos
  .then((resultado) =>{
    console.log(resultado)
  })
  .catch((error) =>{
    console.log(error)
  })

    return (
    <>
  
   <ItemList productos={productos}/>
  
    </>
  )
}

export default ItemListContainer