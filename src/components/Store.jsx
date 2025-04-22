import React from "react";
import { useSelector,  } from "react-redux";
import { LiaRetweetSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { LiaEyeSolid } from "react-icons/lia";
import { BsCart } from "react-icons/bs";

const Store = () => {
  const products = useSelector((state) => state.products.items);
  return (
    <div className="py-20 px-4 sm:px-6 md:px-10 lg:px-12 text-center">
      <h2 className="text-4xl font-bold mb-3">OUR STORE</h2>
      <p className="text-gray-500 text-sm mb-4">
        A wonderful serenity has taken possession of my entire soul, <br />
        like these sweet mornings of spring
      </p>
      <div className="mb-6 text-sm font-semibold text-gray-500">
        <span className="px-4 hover:cursor-pointer hover:text-pink-500">
          Featured
        </span>
        <span className="px-4 hover:cursor-pointer hover:text-pink-500">
          Top Selling
        </span>
        <span className="px-4 hover:cursor-pointer hover:text-pink-500">
          New
        </span>
      </div>

      {/* Grid layout: Full-width responsive cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {products.map((product, idx) => (
          <div key={idx} className="relative w-full group">
            {product.tag && (
              <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1">
                {product.tag}
              </span>
            )}

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-80 object-cover hover:cursor-pointer"
            />

            {/* Label */}
            {product.label && (
              <div className="absolute top-5 left-5 bg-black text-white text-[8px] font-bold px-1 py-1">
                {product.label}
              </div>
            )}

            {/* Discount badge */}
            {product.discount && (
              <div className="absolute top-11 left-4 bg-pink-500 text-white font-bold text-[8px] px-1 py-1">
                {product.discount}
              </div>
            )}

            {/* Icons */}
            <div className="absolute bottom-15 left-1 right-1 flex justify-between items-center opacity-0 group-hover:opacity-100 transition bg-white h-10 hover:cursor-pointer">
              <BsCart className="ml-4 cursor-pointer text-gray-400 hover:text-pink-500 hover:border-pink-500" />
              <div className="pr-5 flex gap-x-1.5">
                <CiHeart className="cursor-pointer text-gray-400 border-[0.5px] text-[15px] border-gray-400 hover:text-pink-500 hover:border-pink-500" />
                <LiaRetweetSolid className="cursor-pointer text-gray-400 border-[0.5px] text-[15px] border-gray-400 hover:text-pink-500 hover:border-pink-500" />
                <LiaEyeSolid className="cursor-pointer text-gray-400 border-[0.5px] text-[15px] border-gray-400 hover:text-pink-500 hover:border-pink-500" />
              </div>
            </div>

            <h3 className="mt-4 text-[15px] font-semibold">{product.title}</h3>
            <div className="text-red-600 font-bold mt-1">
              ${product.price.toFixed(2)}
              {product.oldPrice && (
                <span className="line-through text-gray-400 text-sm ml-2">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-5 px-4 py-2 border border-black text-[10px] font-semibold hover:text-white transition hover:bg-[#ff695c] cursor-pointer">
        SHOP NOW
      </button>
    </div>
  );
};
export default Store;
