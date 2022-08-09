import NavBar from './Components/NavBar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [shoppingCart, setShoppingCart] = useState([])

  return (
    <div className="App">
      <NavBar />
      <Outlet context={{ shoppingCart, setShoppingCart }} />
    </div>
  )
}

export default App
