import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import ShopItem from '../Components/ShopItem'
import { getShop } from '../data'

const Shop = () => {
  let params = useParams()
  const shop = getShop(parseInt(params.shopId, 10))
  const shopItems = shop.items
  const { shoppingCart, setShoppingCart } = useOutletContext()

  return (
    <div>
      <h1>{shop.title}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}></div>
      {shopItems.map((item) => (
        <ShopItem
          key={item.name}
          item={item}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
      ))}
    </div>
  )
}

export default Shop
