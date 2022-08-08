import React from 'react'

const ShopItem = ({ name, cost }) => {
  return (
    <div
      style={{
        padding: '50px',
        border: '1px solid black',
        borderRadius: '10px',
      }}
    >
      <h1>{name}</h1>
      <p>{cost}</p>
      <button style={{ display: 'block' }}>Add to Cart</button>
    </div>
  )
}

export default ShopItem
