const { sequelize, Product, Shop } = require('../db/models')

const getShops = async (req, res) => {
  try {
    const shops = await Shop.findAll()
    return res.json(shops)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
}

const getShopProducts = async (req, res) => {
  const { shopId } = req.params
  try {
    const shop = await Shop.findOne({
      where: { id: shopId },
      include: { model: Product, as: 'products' },
    })
    if (!shop) return res.status(400).json({ msg: 'No such shop!' })
    return res.json(shop)
  } catch (err) {
    return res.status(500).json({ msg: 'Something went wrong!' })
  }
}

const createShop = async (req, res) => {
  const { name } = req.body
  try {
    const shop = await Shop.create({ name })
    return res.json(shop)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
}

module.exports = {
  getShops,
  getShopProducts,
  createShop,
}
