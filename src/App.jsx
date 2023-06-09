import './App.css'
import Home from './components/Home'
import Nav from './components/nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Productos from './components/productos'
import Categorias from './components/categorias'
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState()
  const [category, setCategory] = useState()
  console.log(products);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/api/categories')
      .then((response) => response.json())
      .then((data) => setCategory(data))
  }, [])

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Productos number={products} />}  />
          <Route path='/categories' element={<Categorias category={category}/>}  />
        </Routes>
      </Router>
    </>
  )
}

export default App
