import React from "react";
import {
  FaShippingFast,
  FaHeadset,
  FaRocket,
  FaWallet,
  FaShieldAlt,
} from "react-icons/fa";
import logo1 from '/images/logo1.png'
import logo2 from '/images/logo2.png'
import logo3 from '/images/logo3.png'
import logo4 from '/images/logo4.png'

const Features = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-pink-500 text-3xl mb-6" />,
      title: "Free Shipping",
      subtitle: "Free shipping on all online order",
    },
    {
      icon: <FaHeadset className="text-pink-500 text-3xl mb-6" />,
      title: "24/7 Support",
      subtitle: "Contact us 24 hours",
    },
    {
      icon: <FaRocket className="text-pink-500 text-3xl mb-6" />,
      title: "90 Days Return",
      subtitle: "If goods have damage issues",
    },
    {
      icon: <FaWallet className="text-pink-500 text-3xl mb-6" />,
      title: "100% Money Back",
      subtitle: "You have 15 days to Return",
    },
    {
      icon: <FaShieldAlt className="text-pink-500 text-3xl mb-6" />,
      title: "Secure Payment",
      subtitle: "We Ensure Secure Transaction",
    },
  ];
  return (
    <div className="bg-white py-12">
      <div className="flex flex-wrap justify-center items-center mb-16">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
      </div>
<div className="flex flex-wrap justify-center items-start text-center px-4 mt-28">
{features.map((item,id)=>(
  <div key={id} className="w-full sm:w-1/2 md:w-1/5 px-4 mb-10 sm:mb-6 border-r last:border-none">
    <div className="flex flex-col items-center">
      {item.icon}
      <h3>{item.title}</h3>
      <p>{item.subtitle}</p>
    </div>
  </div>

))}

</div>

    </div>
  );
};

export default Features;
