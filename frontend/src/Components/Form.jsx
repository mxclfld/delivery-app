import React from 'react'
import { postOrder } from '../connector/client'
import { useEffect } from 'react'
import useForm from '../hooks/useForm'

const Form = ({ setIsValid, shoppingCart, setShoppingCart, setPopUp }) => {
  const [values, handleChange] = useForm({
    name: '',
    email: '',
    phone: '',
    address: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const productList = shoppingCart.map((cartItem) => {
      return { productId: cartItem.id, count: cartItem.count }
    })

    const user = values

    const postData = {
      productList: productList,
      user: user,
    }

    const response = await postOrder(postData)
    if (response) {
      setShoppingCart([])
      setPopUp(true)
    }
    return response
  }

  const isValid = ({ name, email, phone, address }) => {
    const re = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    const isNameValid = name.length >= 3
    const isEmailValid = re.test(email.trim())
    const isPhoneValid = phone.length === 13 && phone.startsWith('+380')
    const isAddressValid = address.length >= 10
    const isCartEmpty = !shoppingCart.length
    return (
      isNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isAddressValid &&
      !isCartEmpty
    )
  }

  useEffect(() => {
    const valid = isValid(values)
    setIsValid(valid)
  }, [values])

  return (
    <form id="order-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        autoComplete="off"
        value={values.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        autoComplete="off"
        value={values.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        name="phone"
        autoComplete="off"
        value={values.phone}
        onChange={handleChange}
        required
      />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        name="address"
        autoComplete="off"
        value={values.address}
        onChange={handleChange}
        required
      />
    </form>
  )
}

export default Form
