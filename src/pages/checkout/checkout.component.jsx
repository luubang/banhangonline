import React from "react";
import { connect } from "react-redux";

import "./checkout.styles.scss";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Sản phẩm</span>
        </div>
        <div className="header-block">
          <span>Mô tả</span>
        </div>
        <div className="header-block">
          <span>Số lượng</span>
        </div>
        <div className="header-block">
          <span>Giá</span>
        </div>
        <div className="header-block">
          <span>Xoá</span>
        </div>
      </div>

      {cartItems.map(item => (
        <CheckOutItem key={item.id} item={item}/>
      ))}

      <div className="total">Total : ${totalPrice}</div>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps)(CheckoutPage);
