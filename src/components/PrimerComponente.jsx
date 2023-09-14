import PropTypes from 'prop-types'

const PrimerComponente = ({title, price}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{price}</p>
    </div>
  )
}
PrimerComponente.propTypes ={
  productos:PropTypes.array.isRequired,
  title:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,

}

export default PrimerComponente