import React from 'react'
import { useParams } from 'react-router-dom'
import ShopItem from '../Components/ShopItem'
import { getShop } from '../data'

const Shop = () => {
  let params = useParams()
  const shop = getShop(parseInt(params.shopId, 10))
  console.log(shop)
  const shopItems = shop.items

  return (
    <div>
      <h1>{shop.title}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}></div>
      {shopItems.map((item) => (
        <ShopItem name={item.name} cost={item.cost} />
      ))}
    </div>
  )
}

export default Shop
