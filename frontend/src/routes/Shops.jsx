import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {
  NavLink,
  Outlet,
  useLocation,
  useOutletContext,
} from 'react-router-dom'
import { getShops } from '../connector/client'

function QueryNavLink({ to, ...props }) {
  let location = useLocation()
  return <NavLink to={to + location.search} {...props} />
}

const Shops = () => {
  const [shops, setShops] = useState([])

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await getShops()
        setShops(response)
      } catch (err) {
        if (err.response) {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log(err.message)
        }
      }
    }

    fetchShops()
  }, [])

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
                color: isActive ? '#e0474c' : '',
              }
            }}
            to={`/shops/${shop.id}`}
          >
            {shop.name}
          </QueryNavLink>
        ))}
      </nav>
      <Outlet context={useOutletContext()} />
    </div>
  )
}

export default Shops
