import React from 'react'

const PopUp = ({ setPopUp }) => {
  return (
    <div class="popup">
      <div className="popup-content">
        <p>Your order has been accepted!</p>
        <button onClick={() => setPopUp(false)}>Continue</button>
      </div>
    </div>
  )
}

export default PopUp
