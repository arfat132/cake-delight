import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = ({cart, openModal}) => {
    return (
        <div className='header'>
            <h2>CAKE DELIGHT</h2>
            <div className='cart-container' onClick={openModal}>
                 <FaShoppingCart className='cart' />
                <p className='selected'>{cart.length}</p>
            </div>
        </div>
    );
};

export default Header;