/* eslint-disable react/prop-types */
import '../styles/product.css'

const OnLyProducts = ({ products }) => {
  return (
    <div className='product'>
      <p>Nombre: {products.name}</p>
      <img src={products.image} alt={products.name} />
      <div className='product__dates'>
        <p>Precio: {products.price}</p>
        <p>Categoria: {products.category.name}</p>
      </div>
    </div>
  )
}

export default OnLyProducts;