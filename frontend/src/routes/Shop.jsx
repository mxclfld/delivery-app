import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import ShopItem from '../Components/ShopItem'
import { getProducts } from '../connector/client'

const Shop = () => {
  const params = useParams()

  const [shopName, setShopName] = useState('')
  const [products, setProducts] = useState([])
  const { shoppingCart, setShoppingCart } = useOutletContext()

  const id = parseInt(params.shopId, 10)

  useEffect(() => {
    const fetchProducts = async (id) => {
      try {
        const response = await getProducts(id)
        setShopName(response.name)
        setProducts(response.products)
      } catch (err) {
        if (err.response) {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log(err.message)
        }
      }
    }

    fetchProducts(id)
  }, [id])

  return (
    <div className="Shop">
      <h1>{shopName}</h1>
      <div className="shop">
        {products.map((item) => (
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
