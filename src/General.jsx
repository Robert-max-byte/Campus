import React from 'react'
import { Col,  Row } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import { Home } from './pages/home/Home'
import Product from './pages/Product/Product'
import Register from './pages/register/Register'
import { Shop } from './pages/Shop/Shop'
import { Shops } from './pages/Shops/Shops'

export const General = () => {
  return (
    <div>
         <BrowserRouter>
          <Footer/>
            <Routes>
              <Route path='/Home' element={<Home/>} />
              <Route path='/Product' element={<Product/>} />
              <Route path='/shops' element={<Shops/>}/>
              <Route path='/shop' element={<Shop/>} />
            </Routes>
         </BrowserRouter>
    </div>
  )
}
