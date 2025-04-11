import React from "react";
import bag from "/images/bag.png";
import run from "/images/run.png";

const Sale = () => {
  return (
    <div className="flex items-center justify-center  px-4 bg-white">
    <div className="flex flex-col md:flex-row max-w-7xl w-full">

      {/* Bordered Section (Bag Image + Sale Info) */}
      <div className="absolute flex md:flex-row flex-col border border-gray-100 mt-[70px] overflow-hidden shadow-md md:w-2xl w-full z-10">

        {/* Bag Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={bag}
            alt="Bag and Accessories"
            className="w-full h-[330px] object-cover p-2 bg-gray-100"
          />
        </div>

        {/* Sale Info */}
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 px-8 py-12 md:w-1/2 w-full">
          <p className="text-sm text-gray-500 uppercase tracking-widest">Flash Sale</p>
          <h1 className="text-5xl font-bold mt-2 mb-6">70% SALE</h1>

          {/* Countdown */}
          <div className="flex space-x-2 mb-6">
            {['Days', 'Min', 'Min', 'Sec'].map((label, index) => (
              <div key={index} className="bg-gray-800 text-white px-3">
                <p className="text-lg">00</p>
                <span className="text-[8px] uppercase">{label}</span>
              </div>
            ))}
          </div>

          <button className="border border-gray-800 text-gray-800 px-6 py-2  hover:text-white transition hover:bg-[#ff695c] cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>

      {/* Man Jumping Image (outside border) */}
      <div className="md:w-2xl w-full mt-6 md:mt-0 md:ml-6 relative left-[465px]">
        <img
          src={run}
          alt="Man Jumping"
          className="w-full h-full object-cover shadow-md"
        />
      </div>
    </div>
  </div>
  );
};

export default Sale;
