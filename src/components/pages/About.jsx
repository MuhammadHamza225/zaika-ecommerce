import React from 'react';
import PageLayout from '../PageLayout';
import PageBanner from '../PageBanner';
import bootique from '/images/bootique.png'
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSection from '../CardSection';


const About = () => {
  
  const testimonials = [
    {
      name: "John Doe",
      message:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      image: "/images/testimony.jpeg",
    },
    {
      name: "Jane Smith",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/images/testimony.jpeg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <PageLayout>
      <PageBanner title="About" />
      <section className="p-8 text-center">
       <div className='flex items-center justify-center  px-32 bg-white'>
        <div className=' relative flex flex-col md:flex-row max-w-7xl w-full'>
          <img src={bootique} alt="" />
        </div>

        <div className="absolute right-23 w-[45rem] h-[65%] border-gray-100 bg-gray-100 text-start p-8">
                  <h3 className='text-pink-500 text-sm font-semibold uppercasemb-3'>About Us</h3>
                  <h2 className='text-3xl font-semibold text-gray-900 leading-tight mb-6'>WE PROVIDE LUXURY & COMFORTABLE DRESSES</h2>
                  <p className='text-gray-600 text-base leading-relaxed mb-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>
                  <button>Contact US</button>
                </div>
       </div>
      </section>
{/* Testimonial Section */}
<section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-gray-900">CUSTOMER </span>
            <span className="text-gray-600">FEEDBACK</span>
          </h2>
          <p className="text-gray-500 mb-12">
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
          </p>

          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="bg-gray-100 grid md:grid-cols-2 gap-8 items-center  shadow-sm">
                  {/* Left - Text */}
                  <div className="text-left p-6">
                    <FaQuoteLeft className="text-pink-500 text-4xl mb-4" />
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{testimonial.message}</p>
                    <p className="text-pink-500 font-semibold border-l-4 border-pink-500 pl-2 inline-block">
                      {testimonial.name.toUpperCase()}
                    </p>
                  </div>

                  {/* Right - Image */}
                  <div className="flex justify-end">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className=" w-7xl h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <CardSection count={2}/>

    </PageLayout>
  );
};

export default About;
