import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))) : (<span className="empty-cart">Empty Cart</span>)}
    </div>
    <CustomButton
      onClick={() => {history.push("/checkout");dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems
});

//khi mình chỉ push duy nhất 1 action thì ko cần viết ra hàm DispatchToProps, vì connect sẽ chuyền vào props object hàm dispatch
export default withRouter(connect(mapStateToProps)(CartDropDown));
