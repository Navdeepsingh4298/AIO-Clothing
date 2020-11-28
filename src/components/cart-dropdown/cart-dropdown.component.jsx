import React from 'react';

// Custom Button
import CustomButton from '../custom-button/custom-button.component';

// Stylesheet
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

export default CartDropdown;