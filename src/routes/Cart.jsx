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
    <div>
      <div className="container" style={{ display: 'flex' }}>
        <form action="POST" id="order-form">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
          <label htmlFor="phone">Phone:</label>
          <input type="text" name="phone" />
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" />
        </form>
        {shoppingCart.map((item) => (
          <CartItem
            item={item}
            key={item.name}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        ))}
      </div>
      <p>Total: {total}</p>
      <input type="submit" form="order-form" />
    </div>
  )
}

export default Cart
