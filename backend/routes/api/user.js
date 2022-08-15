const express = require('express')
const { sequelize, User } = require('../../db/models')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll()
    return res.json(users)
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
  const { name, email, phone, address } = req.body
  try {
    const user = await User.create({ name, email, phone, address })
    return res.json(user)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ msg: 'Something went wrong' })
  }
})

module.exports = router
