import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {signOutCartHidden} from '../../redux/cart/cart.actions';

import "./header.styles.scss";

const Header = ({ currentUser, hidden,signOutCartHidden }) => (
  <div className="header">
    <div className="logo-container">
      <span>
        <Link to="/">BL</Link>
      </span>
    </div>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="user-sign-in">
          <div className="option" onClick={() => {auth.signOut(); signOutCartHidden()}}>
            SIGN OUT
          </div>

          <CartIcon />
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  signOutCartHidden : () => dispatch(signOutCartHidden())
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
