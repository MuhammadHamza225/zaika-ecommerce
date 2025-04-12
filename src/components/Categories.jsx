import React from 'react'
import Slider from "react-slick";
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";
import products  from '../utils/slider2';
import { LiaRetweetSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { LiaEyeSolid } from "react-icons/lia";
import { BsCart } from "react-icons/bs";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  dotsClass: "slick-dots custom-dots",
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Categories = () => {
  
  
  return (
   
      <div className="px-8 py-12 bg-white mb-10">
        <h2 className="text-4xl font-bold text-center mb-10">NEW DESIGN</h2>
        <Slider  {...settings} dotsClass="slick-dots custom-dots">
          {products.map((product, index) => (
            <div key={index} className="px-3 mb-16">
              <div className="relative  p-4  overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-cover"
                />
  
                {/* Label */}
                {product.label && (
                  <div className="absolute top-7 left-7 bg-black text-white text-xs px-2 py-1 rounded">
                    {product.label}
                  </div>
                )}
  
                {/* Discount badge */}
                {product.discount && (
                  <div className="absolute top-2 left-20 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                    {product.discount}
                  </div>
                )}
  
                {/* Icons */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition bg-white h-10">
                  <BsCart className="ml-4 cursor-pointer text-gray-400   hover:text-pink-500 hover:border-pink-500" />
                 <div className='pr-5 flex gap-x-1.5'><CiHeart className="cursor-pointer text-gray-400 border-2 text-[20px] border-gray-400   hover:text-pink-500 hover:border-pink-500" />
                 <LiaRetweetSolid className="cursor-pointer text-gray-400 border-2 text-[20px] border-gray-400 hover:text-pink-500 hover:border-pink-500"/>
                  <LiaEyeSolid className="cursor-pointer text-gray-400 border-2 text-[20px] border-gray-400  hover:text-pink-500 hover:border-pink-500" /></div> 
                </div>
              </div>
  
              <h3 className="mt-4 text-center text-md font-medium">{product.title}</h3>
              <div className="text-center mt-1">
                <span className="text-red-500 font-semibold">${product.price.toFixed(2)}</span>
                <span className="text-gray-400 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  
}

export default Categories
