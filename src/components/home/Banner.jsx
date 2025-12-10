import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

const Banner = ({ data }) => {
  const bannerData = data.slice(0, 5);

  return (
    <div>
      <>
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={true}
          loop={true}
          effect={"fade"}
          modules={[Pagination, Autoplay, EffectFade]}
          className="mySwiper"
        >
          {bannerData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div
                  className="h-[450px] w-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${item.coverPhoto})` }}
                >
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Content */}
                  <div className="absolute bottom-10 left-5 z-10 text-white">
                    <h2 className="text-3xl font-bold drop-shadow-lg">
                      {item.title}
                    </h2>

                    <a
                      href={item.downloadLink}
                      target="_blank"
                      className="mt-3 inline-block bg-[#d5ff3f] text-black  hover:bg-[#c7f536] px-4 py-2 rounded-lg font-semibold"
                    >
                      Install Now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
