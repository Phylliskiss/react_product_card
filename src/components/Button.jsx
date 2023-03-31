import React from 'react'
import CartIcon from '../images/icon-cart.svg';

const Button = () => {
  return (
    <div>
      <button >
       <img src={CartIcon} className="cart" alt="Cart icon" /> Add to Cart
      </button>
    </div>
  )
}

export default Button
