import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amzon from "../../../assets/brands/amazon.png";
import amzonv from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moon from "../../../assets/brands/moonstar.png";
import rand from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import starp from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandlogo = [amzon, amzonv, casio, moon, rand, star, starp];

const Brands = () => {
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
    >
      {brandlogo.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
