// VideoCardSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const videoCards = [
  {
    title: 'HALDI CEREMONY',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    title: 'MEHNDI CEREMONY',
    video: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    title: 'BRIDESMAID',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    title: 'SANGEET NIGHT',
    video: 'https://www.w3schools.com/html/movie.mp4',
  },
];

const VideoCardSlider = () => {
  return (
    <div className="bg-[#fce5e0] py-12 px-4">
      <h2 className="text-center text-2xl font-bold mb-10">WEDDING VIDEO COLLECTION</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="max-w-7xl mx-auto"
      >
        {videoCards.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-[300px]">
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white text-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCardSlider;
