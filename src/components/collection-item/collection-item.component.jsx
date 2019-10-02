import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem , customStyle,customStyleCollectionPage }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className={`${customStyle ? 'customStyle' : ''} ${customStyleCollectionPage ? 'customStyleCollectionPage' : ''} collection-item`}>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
