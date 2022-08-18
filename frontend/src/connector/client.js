const axios = require('axios')

const httpClient = axios.create({
  baseURL: 'http://localhost:3001/',
})

const getShops = async () => {
  const response = await httpClient.get('shop')
  return response.data
}

const getProducts = async (id) => {
  const response = await httpClient.get(`shop/${id}`)
  return response.data
}

const postOrder = async ({ productList, user }) => {
  const response = await httpClient.post('http://localhost:3001/order', {
    data: {
      productList,
      user,
    },
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return response.data
}

module.exports = {
  getShops,
  getProducts,
  postOrder,
}
