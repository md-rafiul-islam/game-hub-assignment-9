import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img
              className="h-[300px] w-full object-cover"
              src="https://image.api.playstation.com/vulcan/ap/rnd/202504/1604/ea7656bb6bf02c078cc445b8cac76500fecd6cab27b8c8f1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px] w-full bg-cover bg-center relative
    bg-[url('https://image.api.playstation.com/vulcan/ap/rnd/202504/1604/ea7656bb6bf02c078cc445b8cac76500fecd6cab27b8c8f1.png')]"
            >
              <button
                className="absolute bottom-4 left-1/2 -translate-x-1/2 
      bg-blue-600 text-white px-4 py-2 rounded-lg font-bold"
              >
                Install Now
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
