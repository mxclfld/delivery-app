import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { getShops } from '../data'

function QueryNavLink({ to, ...props }) {
  let location = useLocation()
  return <NavLink to={to + location.search} {...props} />
}

const Shops = () => {
  const shops = getShops()

  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
        {shops.map((shop) => (
          <QueryNavLink
            key={shop.id}
            style={({ isActive }) => {
              return {
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : '',
              }
            }}
            to={`/shops/${shop.id}`}
          >
            {shop.title}
          </QueryNavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}

export default Shops
