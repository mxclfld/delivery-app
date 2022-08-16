const express = require('express')
const { sequelize, Shop } = require('../../db/models')
const {
  getShops,
  createShop,
  getShopProducts,
} = require('../../controllers/shopController')
const router = express.Router()

router.get('/', getShops)
router.get('/:shopId', getShopProducts)
router.post('/', createShop)

module.exports = router
