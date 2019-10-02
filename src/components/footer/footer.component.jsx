import React from "react";
import "./footer.styles.scss";
import {Link } from 'react-router-dom';

const Footer = () => (
  <div className="wrapper">
    <div className="footer-container">
      <div className="social-media">
        <span className="social-media-title">Follow Us</span>
        <div className="social-media-list">
          <a href="https://twitter.com/?lang=vi" target="_blank"   rel="noopener noreferrer" className="social-media-item">
            <i class="fa fa-twitter"></i>
          </a>

          <a href="https://www.facebook.com/" target="_blank"  rel="noopener noreferrer" className="social-media-item">
            <i class="fa fa-facebook"></i>
          </a>

          <a href="https://www.instagram.com/"  target="_blank"  rel="noopener noreferrer" className="social-media-item">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="navigation">
        <div className="navigation-box">
          <Link to='/shop' className="navigation-item">Shop</Link>
          <Link to='#' className="navigation-item">Contact</Link>
          <Link to='signin' className="navigation-item">SignIn</Link>
        </div>
        <div className="navigation-form">
          <span>Sign up to get the latest on sales, new releases and more …</span>
          <div className="navigation-input-box">
            <input class="my-input" placeholder="Enter your email address ..." /> <button class="my-button">SIGN UP</button>
          </div>
          
          <span>© 2019 BL company.</span>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
