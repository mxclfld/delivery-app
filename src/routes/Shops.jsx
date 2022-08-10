import React from 'react'
import {
  NavLink,
  Outlet,
  useLocation,
  useOutletContext,
} from 'react-router-dom'
import { getShops } from '../data'

function QueryNavLink({ to, ...props }) {
  let location = useLocation()
  return <NavLink to={to + location.search} {...props} />
}

const Shops = () => {
  const shops = getShops()

  return (
    <div className="Shops" style={{ display: 'flex' }}>
      <nav>
        {shops.map((shop) => (
          <QueryNavLink
            key={shop.id}
            style={({ isActive }) => {
              return {
                display: 'block',
                fontWeight: isActive ? 'bold' : '',
                color: isActive ? 'red' : '',
              }
            }}
            to={`/shops/${shop.id}`}
          >
            {shop.title}
          </QueryNavLink>
        ))}
      </nav>
      <Outlet context={useOutletContext()} />
    </div>
  )
}

export default Shops
