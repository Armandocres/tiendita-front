/* eslint-disable react/prop-types */
import '../styles/products.css'
import OnLyProducts from "./OnLyProducts";
import { Link } from "react-router-dom";

const Productos = ({ number }) => {
  console.log(number);

  return (
    <>
      <div className="ContainerProducts">
        {number.map(product => (
          <OnLyProducts  key={product.id} products={product}/>
        ))}
      </div>
      <div>
        <Link to='/'>regresa</Link>
      </div>
    </>
  )
}

export default Productos;