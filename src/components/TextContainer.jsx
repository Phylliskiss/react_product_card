import React, { Component } from 'react'
import Button from './Button'

export default class TextContainer extends Component {
  render() {
    return (
      <div className='text-container'>
            <h3> Preview </h3>
            <h1> Gabrielle <br/> Essence Eau <br/> De Parfume</h1>
            <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                Perfumer-Creator for the House of CHANEL.
            </p>
            <div className='price'>
                <h2>
                    $149.99
                </h2>
                <h5>
                    $169.99
                </h5>
            </div>
        
        <Button/>
      </div>
    )
  }
}
