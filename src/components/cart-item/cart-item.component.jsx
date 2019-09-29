import React from "react";

import "./cart-item.styles.scss";
import { removeItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CartItem = ({ item, removeItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="cart-item">
      <div className="image">
        <img src={imageUrl} alt="item" />
      </div>

      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
      <div className="remove-button" onClick={() => removeItem(item)}>
        &#10007;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CartItem);
