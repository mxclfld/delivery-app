const express = require('express')
const shops = require('./routes/api/shops')
const { sequelize } = require('./db/models')

const app = express()
app.use(express.json())
app.use('/shops', shops)

app.listen({ port: 3001 }, async () => {
  console.log('Server up on http://localhost:3001')
  await sequelize.authenticate()
  console.log('Database connected!')
})
