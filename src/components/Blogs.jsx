import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import blogSlider from "../utils/blogSlider";
import { useRef, useState, useEffect } from "react";

const Blogs = () => {
  const paginationRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false); // wait for mount

  useEffect(() => {
    setSwiperReady(true);
  }, []);
  return (
    <div className="w-full px-3 py-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-2">FASHION BLOG</h2>
      <p className="text-center text-gray-500 mb-8">
        A wonderful serenity has taken possession of my entire soul,
        <br />
        like these sweet mornings of spring
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        // navigation
        pagination = {{ clickable: true,
          el: ".custom-swiper-pagination",
         }}
        autoplay={{ delay: 5000 }}
        className="w-full px-2"
      >
        {blogSlider.map((post, idx) => (
          <SwiperSlide key={idx}>
            <div className="mb-10 bg-gray-50 flex flex-col md:flex-row shadow-sm overflow-hidden h-[320px] ">
              <img
                src={post.image}
                alt={post.title}
                className="w-full md:w-[16rem] object-cover h-64 md:h-full"
              />
              <div className="p-6 flex flex-col justify-between md:w-2/3">
                <div className="text-xs text-gray-500 mb-1">
                  📅 {post.date} &nbsp;&nbsp;&nbsp; 🔖 {post.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-red-500 text-sm font-semibold border-b border-red-500 w-fit"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={paginationRef} className="custom-swiper-pagination mt-6"></div>
    </div>
  );
};

export default Blogs;
