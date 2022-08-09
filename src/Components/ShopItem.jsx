import React from 'react'

const ShopItem = ({ item, shoppingCart, setShoppingCart }) => {
  const addItem = (item) => {
    const isInCart = shoppingCart.find(
      (shopItem) => item.name === shopItem.name
    )
    const cartItem = {
      ...item,
      count: 1,
    }

    return !isInCart ? setShoppingCart([...shoppingCart, cartItem]) : null
  }

  return (
    <div
      style={{
        padding: '50px',
        border: '1px solid black',
        borderRadius: '10px',
      }}
    >
      <h1>{item.name}</h1>
      <p>{item.cost}</p>
      <button style={{ display: 'block' }} onClick={() => addItem(item)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ShopItem
