import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className='navbar'>
            <img className='logo' src={assets.logo} alt='logo' />

            <div className='navbar-search'>
                <input type="text" placeholder='Search products...' className='search-bar' />
                <img src={assets.search_icon} alt='search-icon' />
            </div>

            <div className="navbar-right">
                <div
                    className="login-dropdown"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    <button className="login-btn">Login</button>
                    {showDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-header">
                                <span>New customer?</span>
                                <a href="#">Sign Up</a>
                            </div>
                            <ul>
                                <li><i className="fas fa-user"></i> My Profile</li>
                                <li><i className="fas fa-star"></i> Fillkart Plus Zone</li>
                                <li><i className="fas fa-box"></i> Orders</li>
                                <li><i className="fas fa-heart"></i> Wishlist</li>
                                <li><i className="fas fa-ticket-alt"></i> Rewards</li>
                                <li><i className="fas fa-gift"></i> Gift Cards</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="cart">
                    <img src={assets.cart_icon} alt='cart-icon' />
                    <h2>Cart</h2>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
