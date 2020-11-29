import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

// custom buttom
import CustomButton from '../custom-button/custom-button.component';

// Stylesheet
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>₹{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} className='custom-button' inverted>Add to Cart</CustomButton>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);


// Rupee ₹ unicode = &#8377;