// CartDropdown.jsx
import React from 'react';
import { useCart } from './CartContext';

const CartDropdown = () => {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-md p-4 z-50">
      {cartItems.length > 0 ? (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
              <div className="flex-1 ml-4">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">${item.price} x {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">🗑️</button>
            </div>
          ))}
          <div className="flex justify-between font-semibold mb-4">
            <span>SUB TOTAL:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-pink-500 text-white py-2 mb-2 rounded">CHECKOUT</button>
          <button className="w-full border border-pink-500 text-gray-800 py-2 rounded">VIEW CART</button>
        </>
      ) : (
        <p className="text-center text-sm text-gray-600">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartDropdown;
