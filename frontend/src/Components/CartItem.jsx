import React from 'react'
import { FaTrash } from 'react-icons/fa'

const CartItem = ({ item, shoppingCart, setShoppingCart }) => {
  const handleChange = (e) => {
    const count = e.target.value
    const newItem = {
      ...item,
      count: parseInt(count, 10),
    }

    const index = shoppingCart.map((object) => object.name).indexOf(item.name)
    const newShoppingCart = [...shoppingCart]
    newShoppingCart[index] = newItem

    return setShoppingCart([...newShoppingCart])
  }

  const handleClick = () => {
    const newShoppingCart = shoppingCart.filter(
      (object) => object.name !== item.name
    )
    return setShoppingCart([...newShoppingCart])
  }

  return (
    <div className="cart-item">
      <p className="cart-item-title">{item.name}</p>
      <p>Cost: {item.cost}</p>
      <input type="number" min="1" value={item.count} onChange={handleChange} />
      <button onClick={handleClick}>
        <FaTrash />
      </button>
    </div>
  )
}

export default CartItem
