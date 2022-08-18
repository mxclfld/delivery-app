import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import CartItem from '../Components/CartItem'
import Form from '../Components/Form'
import PopUp from '../Components/PopUp'

const Cart = () => {
  const { shoppingCart, setShoppingCart } = useOutletContext()
  const [total, setTotal] = useState(0)
  const [isValid, setIsValid] = useState(false)
  const [popUp, setPopUp] = useState(false)

  const sum = () => {
    return shoppingCart.reduce(
      (prev, curr) => prev + (curr.price * curr.price || 0),
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
        <Form
          setIsValid={setIsValid}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          setPopUp={setPopUp}
        />
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
      <div className="total-section">
        <p>Total: {total}</p>
        <input
          style={{
            backgroundColor: isValid ? '#92b780' : '#e0474c',
            pointerEvents: isValid ? 'auto' : 'none',
          }}
          type="submit"
          form="order-form"
        />
      </div>
      {popUp ? <PopUp setPopUp={setPopUp} /> : null}
    </div>
  )
}

export default Cart
