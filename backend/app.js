const express = require('express')
const shop = require('./routes/api/shop')
// const product = require('./routes/api/product')
const order = require('./routes/api/order')
// const user = require('./routes/api/user')
const { sequelize, Order, User } = require('./db/models')

const app = express()
app.use(express.json())

app.use('/shop', shop)
// app.use('/product', product)
app.use('/order', order)
// app.use('/user', user)

app.listen({ port: 3001 }, async () => {
  console.log('Server up on http://localhost:3001')
  await sequelize.sync({ alter: true })
  console.log('Database connected!')
})
