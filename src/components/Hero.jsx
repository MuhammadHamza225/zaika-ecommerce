import React from 'react'
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sliderData from "../utils/slider.js";



const NextArrow = ({ onClick }) => (
  <div className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer">
    <ChevronRight size={36} onClick={onClick} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer">
    <ChevronLeft size={36} onClick={onClick} />
  </div>
);

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
      {sliderData.map((img, index) => (
  <div key={index} className="relative">
    <img src={img.url} alt="Sale" className="w-full h-[500px] object-cover" />

    {/* Overlay Box */}
    <div className="absolute top-1/2 left-16 transform -translate-y-1/2 bg-white p-8 shadow-lg max-w-md">
      <p className="text-lg text-red-500 font-medium mb-2">{img.heading}</p>
      <h2 className="text-6xl font-bold text-black mb-4">{img.discount}</h2>
      <button className="mt-2 underline text-gray-900 text-sm">{img.cta}</button>
    </div>
  </div>
))}

      </Slider>
    </div>
  )
}

export default Hero

