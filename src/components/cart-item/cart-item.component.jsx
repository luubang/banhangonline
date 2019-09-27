import React from "react";

import "./cart-item.styles.scss";
import { deleteItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CartItem = ({ item, deleteItem }) => {
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
      <div className="remove-button" onClick={() => deleteItem(item)}>
        &#10007;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch(deleteItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CartItem);
