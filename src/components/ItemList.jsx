import Item from './Item'
import PropTypes from 'prop-types'


const ItemList= ({productos}) => {
  return (
    <div>
        {
            productos.map((p) => {
                return (
                    <Item
                    key={p.id}
                    name={p.name}
                    price={p.price}
                    stock={p.stock}
                    />
            )
            })
        }
    </div>
  )
}
ItemList.propTypes = {
  productos:PropTypes.array.isRequired
}

export default ItemList