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

  let userId = User.findOne({
    where: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
    },
  })

  if (!userId) {
    try {
      const newUser = await User.create({ user })
      userId = newUser.id
    } catch (err) {
      res.status(500).json(err)
    }
  }
  try {
    const order = Order.create({ userId })
    const orderId = order.id

    productList.forEach((object) => {
      const { productId, count } = object
      ShopCart.create({ orderId, productId, count })
    })

    const response = Order.findOne({
      where: { orderId },
      include: { model: Product, as: 'ProductsInOrder' },
    })

    res.status(200).json(response)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = { getOrder, postOrder }
