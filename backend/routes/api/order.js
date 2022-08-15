const express = require('express')
const { getOrder, postOrder } = require('../../controllers/orderController')
const router = express.Router()

router.get('/:orderId', getOrder)
router.post('/', postOrder)

module.exports = router
