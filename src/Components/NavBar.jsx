import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink className="logo" to={'/'}>
        <span id="blue">U</span>
        <span id="yellow">S</span>hop
      </NavLink>
      <ul>
        <li>
          <NavLink
            className="navlink"
            style={({ isActive }) => ({
              display: 'block',
              color: isActive ? '#e0474c' : '',
              fontWeight: 'bold',
            })}
            to={'/shops'}
          >
            Shops
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              display: 'block',
              color: isActive ? '#e0474c' : '',
              fontWeight: 'bold',
            })}
            to={'/cart'}
          >
            Shopping Cart
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
