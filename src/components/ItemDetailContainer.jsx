import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


const ItemDetailContainer = () => {
  const {id} = useParams()
  const [productos, setProductos]= useState([])
 

  useEffect(()=>{
  const productos = [
    {id: 1, name: "Producto A", price: 1000, stock: 100},
    {id: 2, name: "Producto B", price: 2000, stock: 200},
    {id: 3, name: "Producto C", price: 3000, stock: 300}
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

      setProductos(resultado);
    })
    }, [id])
  const filteredProducts=productos.filter((producto)=>producto.id==id)

    
    return (
    <>
    <ItemDetail productos={filteredProducts}/>
  
    </>
  )
}

export default ItemDetailContainer