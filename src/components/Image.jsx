import React from 'react'
import DesktopImage from '../images/image-product-desktop.jpg'
import MobileImage from '../images/image-product-mobile.jpg'



const Image = () => {
  return (
    <div>
        <img src={DesktopImage} className='desktop-image-container' alt="Gabrielle Essence Perfume" />
        <img src={ MobileImage} className="MobileImage" alt="Gabrielle Essence Perfume" />
    </div>
  )
}

export default Image