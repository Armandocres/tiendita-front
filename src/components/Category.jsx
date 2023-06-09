/* eslint-disable react/prop-types */
import '../styles/product.css'

const Category = ({category}) => {

  return (
    <div className='product'>
      <p>Nombre Categoria: {category.name}</p>
      <img src={category.image} alt={category.name} />
    </div>
  )
}

export default Category;