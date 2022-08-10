import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Shops from './routes/Shops'
import Cart from './routes/Cart'
import Shop from './routes/Shop'
import Home from './Components/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="shops" element={<Shops />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select a shop</p>
              </main>
            }
          />
          <Route path=":shopId" element={<Shop />}></Route>
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/shops" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
