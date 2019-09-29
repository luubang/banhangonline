import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
// import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser, cartHidden }) => (
  <div className="header">
    <div className="logo-container">
      <span>
        <Link to="/">BL</Link>
      </span>
    </div>
    <div className="options">
      <Link to="/shop" className="option">
        Shop
      </Link>
      <Link to="/shop" className="option">
        Contact
      </Link>

      {currentUser ? (
        <div className="name-box">
          <h4 className="sign-out-greeting">Hello, {currentUser.displayName} </h4>
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign In
        </Link>
      )}

      <CartIcon />
    </div>
    {cartHidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cartHidden: state.cart.isHidden
});

export default connect(mapStateToProps)(Header);
