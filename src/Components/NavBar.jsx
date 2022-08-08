import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        style={({ isActive }) => ({
          display: 'block',
          margin: '1rem 0',
          padding: '15px',
          color: isActive ? 'red' : '',
        })}
        to={'/shops'}
      >
        Shops
      </NavLink>
      |
      <NavLink
        style={({ isActive }) => ({
          display: 'block',
          margin: '1rem 0',
          padding: '15px',
          color: isActive ? 'red' : '',
        })}
        to={'/cart'}
      >
        Shopping Cart
      </NavLink>
    </div>
  )
}

export default NavBar
