import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <div className='Nav'>
      <div className='Nav--container'>
        <figure>
          <img src="https://play-lh.googleusercontent.com/mufACq3W2y7UcKIBNcTIQ487OverczCAMG6G_XshcUM7Fqhrt_rvfKhwGwkBO45mlw" alt="" />
        </figure>
      </div>
      <div className='Nav-items'>
        <ul>
          <Link to='/products' className='Nav-items--link'>productos</Link>
          <Link to='/categories' className='Nav-items--link'>Categorias</Link>
        </ul>
      </div>
    </div>
  )
}

export default Nav;