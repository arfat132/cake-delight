import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Product.css'
const Product = ({product,handleClick}) => {
    const { name, img, price, ratings } = product;
    return (
        <div className='product'>
        <img src={img} alt="" />
        <div className='text'>
            <h2>{name}</h2>
            <p className='ratings'>{ratings}</p>
        </div>
        <div className='btn-container'>
        <h2>${price}</h2>
            <button className='btn' onClick={()=>handleClick(product)}><FaShoppingCart /></button>
            </div>
            </div>
    );
};

export default Product;