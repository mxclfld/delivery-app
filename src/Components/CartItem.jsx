import React from 'react'

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
    <div>
      <p>{item.name}</p>
      <p>Cost: {item.cost}</p>
      <input type="number" min="0" value={item.count} onChange={handleChange} />
      <button onClick={handleClick}>Delete from Cart</button>
    </div>
  )
}

export default CartItem
