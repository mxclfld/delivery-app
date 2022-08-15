const express = require('express')
const { sequelize, Shop } = require('../../db/models')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const shops = await Shop.findAll()
    return res.json(shops)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
})

/*
router.get('/:shopId', async (req, res) => {

})
*/

router.post('/', async (req, res) => {
  const { name } = req.body
  try {
    const shop = await Shop.create({ name })
    return res.json(shop)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
})

module.exports = router
