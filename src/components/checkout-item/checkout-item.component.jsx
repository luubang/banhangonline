import React from "react";

import "./checkout-item.styles.scss";
import { removeItem,deleteItem,addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckOutItem = ({ item, removeItem,deleteItem,addItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="pic" />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => deleteItem(item)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => removeItem(item)}>
        &#10007;
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  deleteItem : item => dispatch(deleteItem(item)),
  addItem : item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckOutItem);
