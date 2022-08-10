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
    <div className="Shop">
      <h1>{shop.title}</h1>
      <div className="shop">
        {shopItems.map((item) => (
          <ShopItem
            key={item.name}
            item={item}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        ))}
      </div>
    </div>
  )
}

export default Shop
