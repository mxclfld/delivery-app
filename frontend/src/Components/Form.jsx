import React, { useState } from 'react'
import { useEffect } from 'react'
import useForm from '../hooks/useForm'

const Form = ({ setIsValid }) => {
  const [values, handleChange] = useForm({
    name: '',
    email: '',
    phone: '',
    address: '',
  })

  const [message, setMessage] = useState('')

  const isValid = ({ name, email, phone, address }) => {
    const re = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    const isNameValid = name.length >= 6
    const isEmailValid = re.test(email.trim())
    const isPhoneValid = phone.length === 12 && phone.startsWith('380')
    const isAddressValid = address.length >= 10
    console.log({ isNameValid, isEmailValid, isPhoneValid, isAddressValid })
    return isNameValid && isEmailValid && isPhoneValid && isAddressValid
  }

  useEffect(() => {
    const valid = isValid(values)
    setIsValid(valid)
  }, [values])

  return (
    <form action="POST" id="order-form">
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
