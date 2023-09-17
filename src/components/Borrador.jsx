{/*import ItemDetail from './ItemDetail'
import {useParams, useEffect} from 'react-router-dom'

const ItemDetailContainer = () => {
  const {id} = useParams()
  useEffect(()=>{

  const productos = [
    {id: 1, name: "Producto A", price: 1000, stock: 100},
    {id: 2, name: "Producto B", price: 2000, stock: 200},
    {id: 3, name: "Producto C", price: 300, stock: 300}
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
  }, [id])
    return (
    <>
    <ItemDetail productos={productos}/>
  
    </>
  )
}

export default ItemDetailContainer*/}


{/*onClick={()=> <ItemDetailContainer/>}*/}