const { sequelize, Order, User, Product } = require('../db/models')

const getOrder = async (req, res) => {
  const { orderId } = req.params
  try {
    const order = await Order.findOne({
      where: { id: orderId },
      include: {
        model: Product,
        as: 'products',
      },
    })
    return res.json(order)
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
}

const postOrder = async (req, res) => {
  const { user, productList } = req.body.data

  const userDB = await User.findOne({
    where: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
    },
  })

  let userId = null

  if (!userDB) {
    try {
      const newUser = await User.create({ ...user })
      userId = newUser.toJSON().id
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    userId = userDB.toJSON().id
  }

  try {
    const productIdList = (await Product.findAll({ raw: true })).map(
      (product) => product.id
    )
    const isInList = (value) => productIdList.includes(value)

    const isValidInput = productList
      .map((product) => product.productId)
      .every(isInList)
    if (!isValidInput) {
      return res.status(400).json({ msg: 'Please provide valid product list!' })
    }

    const order = await Order.create({ userId })
    const orderId = order.toJSON().id

    const listOfProducts = await Promise.all(
      productList.map(async (object) => {
        const { productId, count } = object
        const product = await Product.findOne({ where: { id: productId } })
        await order.addProduct(product, { through: { count } })
        return product
      })
    )
    const response = await Order.findOne({
      where: { id: orderId },
      include: {
        model: Product,
        as: 'products',
      },
    })

    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

module.exports = { getOrder, postOrder }
