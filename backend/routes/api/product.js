const express = require('express')
const { sequelize, Product, Shop } = require('../../db/models')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Shop,
          as: 'shop',
        },
      ],
    })
    return res.json(products)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  const { shop_id, name, price } = req.body
  try {
    const product = await Product.create({ shop_id, name, price })
    return res.json(product)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ msg: err })
  }
})

module.exports = router
