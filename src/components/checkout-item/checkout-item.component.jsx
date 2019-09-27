import React from "react";

import "./checkout-item.styles.scss";
import { deleteItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckOutItem = ({ item, deleteItem }) => {
    const {imageUrl,name,price,quantity} = item
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt='pic'/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => deleteItem(item)}>
        &#10007;
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch(deleteItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckOutItem);
