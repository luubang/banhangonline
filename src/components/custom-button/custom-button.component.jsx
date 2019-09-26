import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, googleSignIn, itemButton, ...otherProps }) => (
  <button
    className={`${itemButton ? "item-button" : ""} ${googleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
