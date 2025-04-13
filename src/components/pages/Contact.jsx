import React from 'react'
import PageLayout from '../PageLayout'
import PageBanner from '../PageBanner'
import { FaHome, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <PageLayout>
      <PageBanner title = 'Contact'/>
      <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div className="space-y-10">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-4 rounded">
              <FaHome className="text-pink-500 text-2xl" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">ADDRESS</h3>
              <p className="text-gray-600">
                2779 Rubaiyat Road, Traverse City,<br />
                MI 49684
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-4 rounded">
              <FaPhoneAlt className="text-pink-500 text-2xl" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">PHONE</h3>
              <p className="text-gray-600">+012 789654321<br />+969 123456789</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-4 rounded">
              <FaEnvelope className="text-pink-500 text-2xl" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">EMAIL</h3>
              <p className="text-gray-600">company@mail.com<br />contact@mail.com</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-4 rounded">
              <FaClock className="text-pink-500 text-2xl" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">BUSINESS HOUR</h3>
              <p className="text-gray-600">10.00 am - 08.00 pm<br />Online 24/7</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-gray-100 p-10 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">GET IN TOUCH</h2>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none" />
            <input type="email" placeholder="Your Email" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none" />
            <input type="text" placeholder="Your Subject" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none" />
            <textarea rows="4" placeholder="Your Message" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none"></textarea>
            <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition">SUBMIT</button>
          </form>
        </div>
      </div>
      

    </section>
    {/* map  */}
      
    <div className="w-full h-[600px]">
        <iframe
          title="xgenious map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.2769930457214!2d90.38632731443033!3d23.903007689471424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5432a16d67b%3A0x44b5e4cb4e5e8011!2sXgenious!5e0!3m2!1sen!2sbd!4v1615402615553!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0 w-full h-full"
        ></iframe>
      </div>
    </PageLayout>
  )
}

export default Contact
