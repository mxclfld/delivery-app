const { sequelize, Order, ShopCart, User, Product } = require('../db/models')

const getOrder = async (req, res) => {
  const { orderId } = req.params
  try {
    const order = Order.findOne({ where: { orderId }, include: [Product] })
    req.json(order)
  } catch (err) {
    req.status(500).json(err)
  }
}

const postOrder = async (req, res) => {
  const { user, productList } = req.body

  const userDB = await User.findOne({
    where: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
    },
    raw: true,
  })
  let userId = userDB.id

  if (!userId) {
    try {
      const newUser = await User.create({ ...user })
      userId = newUser.id
    } catch (err) {
      res.status(500).json(err)
    }
  }
  try {
    const order = (await Order.create({ userId })).toJSON()
    console.log(order)
    const orderId = order.id

    productList.forEach(async (object) => {
      const { productId, count } = object
      const ORDER = 6
      await ShopCart.create({ ORDER, productId, count })
    })

    const response = await Order.findOne({
      where: { orderId },
      include: { model: Product, as: 'ProductsInOrder' },
      raw: true,
      nest: true,
    })

    res.status(200).json(response)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = { getOrder, postOrder }
