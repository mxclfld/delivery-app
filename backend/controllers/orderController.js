const { sequelize, Order, User, Product, Shop } = require('../db/models')

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
    console.log('🦆')
    const productIdList = (await Product.findAll({ raw: true })).map(
      (product) => product.id
    )
    console.log('🦆')
    console.log(productIdList)
    const isInList = (value) => productIdList.includes(value)

    const isValidInput = productList
      .map((product) => product.productId)
      .every(isInList)
    console.log('🦆')
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
    console.log('1111111111111111111111111111111111111111111111111111111111111')
    const response = await Order.findOne({
      where: { id: orderId },
      include: Product,
    })

    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

module.exports = { getOrder, postOrder }

// productList.forEach(async (object) => {
//   const { productId, count } = object
//   const ORDER = 6
//   await ShopCart.create({ ORDER, productId, count })
// })
// console.log('1111111111111111111111111PRODUCT LIST OK')
// console.log('1111111111111111111111111PRODUCT LIST OK')
// console.log('1111111111111111111111111PRODUCT LIST OK')
// console.log('1111111111111111111111111PRODUCT LIST OK')
// console.log('1111111111111111111111111PRODUCT LIST OK')

// const response = await Order.findOne({
//   where: { orderId },
//   include: { model: Product },
//   raw: true,
//   nest: true,
// })
