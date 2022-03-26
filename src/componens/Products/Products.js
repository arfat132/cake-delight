import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import Modal from 'react-modal';
import './Products.css';
import Cart from '../Cart/Cart';
import Buttons from '../Buttons/Buttons';

 Modal.setAppElement('#root');

const Products = () => {
    const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  

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
    const randomItem = [Math.floor(Math.random() * (cart.length - 1))];
    setCart(randomItem)
    console.log(randomItem)
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
        {cart.length === 0 && (
            <div className='cart-warning'>
              <p> No Product Found </p>
            </div>
            )}
            {cart.map((selectedItems) => (
             <Cart key={selectedItems.id}
                selectedItems={selectedItems}
                 ></Cart>
            ))}
       
      <Buttons randomItems={randomItems} handleRemove={handleRemove}></Buttons>
    </Modal>
   </div>
    
    );
};

export default Products;