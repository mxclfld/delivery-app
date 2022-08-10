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
    <div className="product">
      <div className="title">
        <h1>{item.name}</h1>
      </div>
      <main>
        <p>{item.cost}</p>
        <button style={{ display: 'block' }} onClick={() => addItem(item)}>
          Add to Cart
        </button>
      </main>
    </div>
  )
}

export default ShopItem
