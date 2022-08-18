import React, { useState } from 'react'

const ShopItem = ({ item, shoppingCart, setShoppingCart }) => {
  const { addText, removeText } = {
    addText: 'Add to Cart',
    removeText: 'Remove from Cart',
  }

  const { red, green } = { red: '#e0474c', green: '#92B780' }

  const itemInCart = shoppingCart.find(
    (shopItem) => item.name === shopItem.name
  )

  const initialText = itemInCart ? removeText : addText
  const initialColor = itemInCart ? red : green

  const [buttonText, setButtonText] = useState(initialText)
  const [buttonColor, setButtonColor] = useState(initialColor)

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

  const removeItem = (item) => {
    const newCart = shoppingCart.filter(
      (shopItem) => item.name !== shopItem.name
    )

    return setShoppingCart([...newCart])
  }

  const handleClick = (item) => {
    if (buttonText === addText) {
      addItem(item)
      setButtonText(removeText)
      setButtonColor(red)
    } else {
      removeItem(item)
      setButtonText(addText)
      setButtonColor(green)
    }
  }

  return (
    <div className="product">
      <div className="title">
        <h1>{item.name}</h1>
      </div>
      <main>
        <p>{item.price}</p>
        <button
          style={{ display: 'block', backgroundColor: buttonColor }}
          onClick={() => handleClick(item)}
        >
          {buttonText}
        </button>
      </main>
    </div>
  )
}

export default ShopItem
