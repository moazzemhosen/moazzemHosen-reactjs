import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categories from '../pages/Categories'
import CDetails from '../pages/CDetails'
import Details from '../pages/Details'
import Form from '../pages/Form'
import Home from '../pages/Home'
import Products from '../pages/Products'
const MainRoutes = () => {
  return (
    <div>
         <Routes>
        <Route
          path="/"
          element={ <Home />}
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<CDetails />} />
        <Route path="/form" element={<Form />} />
        
      </Routes>
    </div>
  )
}

export default MainRoutes