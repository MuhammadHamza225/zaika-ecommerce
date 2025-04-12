import React from "react";
import { useSelector } from "react-redux";
import { LiaRetweetSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { LiaEyeSolid } from "react-icons/lia";
import { BsCart } from "react-icons/bs";
import model from "/images/model.png";

const Special = () => {
  const products = useSelector((state) => state.products.items);
  return (
    <div className="mt-10 pt-5 flex justify-center bg-white">
      <div className="flex flex-col md:flex-row items-stretch w-full">
        {/* Product Cards - 70% width */}
        <div className="w-full md:w-[70%] py-0 pr-0 pl-4 text-left">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-3">SPECIAL SALE</h2>
            <p className="text-gray-500 text-sm mb-4">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet
              <br />
              mornings of spring
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {products.slice(0, 6).map((product, idx) => (
              <div key={idx} className="relative w-full group flex flex-col">
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1">
                    {product.tag}
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-80 h-80 object-cover hover:cursor-pointer"
                />

                {product.label && (
                  <div className="absolute top-5 left-5 bg-black text-white text-[8px] font-bold px-1 py-1">
                    {product.label}
                  </div>
                )}

                {product.discount && (
                  <div className="absolute top-11 left-4 bg-pink-500 text-white font-bold text-[8px] px-1 py-1">
                    {product.discount}
                  </div>
                )}

                <div className="absolute bottom-15 left-[0.8px] right-[0.8px] flex justify-between items-center opacity-0 group-hover:opacity-100 transition bg-white h-10 hover:cursor-pointer">
                  <BsCart className="ml-4 cursor-pointer text-gray-400 hover:text-pink-500 hover:border-pink-500" />
                  <div className="pr-5 flex gap-x-1.5">
                    <CiHeart className="cursor-pointer text-gray-400 border-[0.5px] text-[15px] border-gray-400 hover:text-pink-500 hover:border-pink-500" />
                    <LiaRetweetSolid className="cursor-pointer text-gray-400 border-[0.5px] text-[15px] border-gray-400 hover:text-pink-500 hover:border-pink-500" />
                    <LiaEyeSolid className="cursor-pointer text-gray-400 border-[0.5px] text-[15px] border-gray-400 hover:text-pink-500 hover:border-pink-500" />
                  </div>
                </div>

                <h3 className="mt-4 text-[13px] font-semibold">
                  {product.title}
                </h3>
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
        </div>

        {/* Model Image - 30% width */}
        <div className="relative w-full md:w-[30%] pr-4">
          <img src={model} alt="model" className="w-full h-full object-cover" />
          <div className="absolute text-white top-10 right-34">
            <div className="text-center">
            <p className="text-lg">MONDAY OFFER</p></div>
            <h3 className="text-[50px] font-semibold">70% OFF</h3>
            <div className="text-center">
            <button className="font-semibold border-b-2 py-2 hover:text-pink-500 hover:cursor-pointer">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
