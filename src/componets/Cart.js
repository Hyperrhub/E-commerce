import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(product => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.title} />
            <div className="cart-item-details">
              <div className="cart-item-title">{product.title}</div>
              <div className="cart-item-price">${product.price.toFixed(2)}</div>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          Total: <span>${totalPrice.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
