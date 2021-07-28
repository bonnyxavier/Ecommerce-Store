import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="navBar">
            
            <ul class="navbar-ul">
                <Link to="/" style={{ textDecoration: 'none' }}><li className="navbar-li">Home</li></Link>
                <Link to="/categories/mens" style={{ textDecoration: 'none' }}><li className="navbar-li">Men's</li></Link>
                <Link to="/categories/womens" style={{ textDecoration: 'none' }}><li className="navbar-li">Womens's</li></Link>
                <Link to="/signup" style={{ textDecoration: 'none' }}><li className="navbar-li login">Login/Register</li></Link>
                <Link to="/cart" style={{ textDecoration: 'none' }}><li className="navbar-li cart">My Cart</li></Link>
            </ul>
            
        </div>
    )
}

export default Header
