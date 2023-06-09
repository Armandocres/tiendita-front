/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import Category from "./Category";
import '../styles/categorias.css'

const Categorias = ({category}) => {
  console.log(category);
  return (
    <>
      <div className='ContainerCategory'>
        {category.map(category => (
          <Category key={category.id} category={category}/>
          ))}
      </div>
      <div className='link'>
        <NavLink to='/' className='BUttons_link'>Regresa</NavLink>
      </div>
    </>
  )
}

export default Categorias;