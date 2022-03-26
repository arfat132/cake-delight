import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import Modal from 'react-modal';
import './Products.css';
import Cart from '../Cart/Cart';
import Buttons from '../Buttons/Buttons';
import RandomItem from '../RandomItem/RandomItem';

Modal.setAppElement('#root');

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [random, setRandom] = useState([]);

  const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    };

  const handleClick = (product) => {
  const newCart = [...cart, product];
      setCart(newCart)
      
  }
  
  const randomItems = () => {
  const randomCart = [Math.floor(Math.random() * (cart.length - 1))];
    setRandom(cart[randomCart])
    
    
}

  const handleRemove = () => {
    setCart([])
  }

    useEffect(() => {
        fetch('cake.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  return (
    <div>
       <Header cart={cart} openModal={openModal}></Header>
       <div className='products'>
         {
           products.map(product =>
              <Product
                    key={product.id}
                    product={product}
                    handleClick={handleClick}
              ></Product>
              )
           }
      </div>
      <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            >
        <button onClick={closeModal}>close</button>
        <h1>Selected Items</h1>
        {cart.length === 0 && (
            <p> No Product Found </p>
        )}
        
            {cart.map((selectedItems) => (
              <Cart key={selectedItems.id}
                selectedItems={selectedItems}
              ></Cart>

            ))}
       <RandomItem random={random}></RandomItem>
      <Buttons randomItems={randomItems} handleRemove={handleRemove}></Buttons>
    </Modal>
   </div>
    
    );
};

export default Products;