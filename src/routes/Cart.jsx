import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import CartItem from '../Components/CartItem'

const Cart = () => {
  const { shoppingCart, setShoppingCart } = useOutletContext()
  const [total, setTotal] = useState(0)

  const sum = () => {
    return shoppingCart.reduce(
      (prev, curr) => prev + (curr.cost * curr.count || 0),
      0
    )
  }

  useEffect(() => {
    const totalPrice = sum()
    setTotal(totalPrice)
  }, [shoppingCart])

  return (
    <div className="Cart">
      <div className="container" style={{ display: 'flex' }}>
        <form action="POST" id="order-form">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" autoComplete="off" />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" autoComplete="off" />
          <label htmlFor="phone">Phone:</label>
          <input type="text" name="phone" autoComplete="off" />
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" autoComplete="off" />
        </form>
        <div className="cart">
          {shoppingCart.map((item) => (
            <CartItem
              item={item}
              key={item.name}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          ))}
        </div>
      </div>
      <p>Total: {total}</p>
      <input type="submit" form="order-form" />
    </div>
  )
}

export default Cart
