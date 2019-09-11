import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
// import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      BL
    </Link>

    <div className="options">
      <Link to="/shop" className="option">
        Shop
      </Link>
      <Link to="/shop" className="option">
        Contact
      </Link>
      <Link>
        {
          currentUser?
          <div className="option" onClick={() => auth.signOut()}> Sign Out </div>
          :
          <Link className="option" to="/signin"> Sign In</Link>
        }
      </Link>
    </div>
  </div>
);

export default Header;