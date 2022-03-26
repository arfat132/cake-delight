import React from 'react';
import './Cart.css';

const Cart = ({ selectedItems }) => {
    
    const { name, price, img, ratings } = selectedItems;
  
    return (
        <div>
            <div className='items'>
                
                   <img src={img} alt="" />
                    <div className='items-info'>
                      <h2>{name}</h2>
                      <h2>${price}</h2> 
                      <p className='ratings'>{ratings}</p>
                    
                   </div>
            </div> 
           
        </div>
    );
};

export default Cart;