// ProductCard.jsx
import React from 'react';
import { useCart } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow text-center">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-medium">{product.name}</h2>
      <p className="text-pink-500 font-bold">${product.price}</p>
      <button onClick={() => addToCart(product)} className="mt-2 bg-pink-500 text-white px-4 py-1 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
