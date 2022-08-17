const express = require('express')
const cors = require('cors')
const shop = require('./routes/api/shop')
const order = require('./routes/api/order')
const { sequelize, Order, User } = require('./db/models')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/shop', shop)
app.use('/order', order)

app.listen({ port: 3001 }, async () => {
  console.log('Server up on http://localhost:3001')
  await sequelize.sync({ alter: true })
  console.log('Database connected!')
})
