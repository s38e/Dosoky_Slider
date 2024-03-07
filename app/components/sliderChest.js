"use client"; // <===== REQUIRED
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import "./styles/swiper-module.css";
import swiperImg_1 from "@/public/assets/1.jpg";
import swiperImg_2 from "@/public/assets/1.jpg";
import swiperImg_3 from "@/public/assets/1.jpg";
import swiperImg_4 from "@/public/assets/1.jpg";

const SliderChest = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Autoplay, Navigation]}
      loop={false}
      spaceBetween={20}
      slidesPerView={1.37}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="image">
          <Image src={swiperImg_1} alt="SliderImg1" className="img" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="image">
          <Image src={swiperImg_1} alt="SliderImg1" className="img" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="image">
          <Image src={swiperImg_1} alt="SliderImg1" className="img" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="image">
          <Image src={swiperImg_1} alt="SliderImg1" className="img" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderChest;
