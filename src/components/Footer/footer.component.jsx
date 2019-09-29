import React from 'react';
import './footer.styles.scss';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-category">
                <span className="footer-category-item">Shop</span>
                <span className="footer-category-item">Contact</span>
                <span className="footer-category-item">Sign in</span>
            </div>
            <div className="footer-contact">
                <h1>BL</h1>
            </div>
        </div>
    )
}

export default Footer;