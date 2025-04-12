import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-8 py-12">
      <div className="flex flex-col max-w-7xl mx-auto md:flex-row justify-between gap-10">
        <div>
          <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-500 cursor-pointer">Home</li>
            <li className="hover:text-pink-500 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-pink-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-pink-500 cursor-pointer">Blog Grid Style</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Helpfull LINKS</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-500 cursor-pointer">Home</li>
            <li className="hover:text-pink-500 cursor-pointer">Product</li>
            <li className="hover:text-pink-500 cursor-pointer">Blog</li>
            <li className="hover:text-pink-500 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Store Info</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-500 cursor-pointer">📍 Dhaka, Bangladesh</li>
            <li className="hover:text-pink-500 cursor-pointer">📞 01875484888</li>
            <li className="hover:text-pink-500 cursor-pointer">✉️ Support@Zaika.Com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Get in touch</h3>
          <p className="mb-4">Sign up to our mailing list now!</p>
          <div className="flex border rounded overflow-hidden">
            <input type="email" placeholder="your email here" className="px-3 py-2 w-full text-white outline-none" />
            <button className="bg-pink-500 px-4 text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.94 2.94a1.5 1.5 0 012.12 0l9.9 9.9a1.5 1.5 0 01-2.12 2.12l-9.9-9.9a1.5 1.5 0 010-2.12z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center border-t mt-8 pt-8 border-gray-700"> © 2025 All right reserved by Zaika</div>
    </footer>
  );
};

export default Footer;
