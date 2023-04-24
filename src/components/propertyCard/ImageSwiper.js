import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/swiper.css';
import 'swiper/css/navigation';

const ImageSwiper = ({ images }) => {
  return (
    <Swiper className="image_swiper" navigation={true} modules={[Navigation]}>
      {images.map((image) => {
        const imageSource = require(`../../assets/img/properties/${image}`);
        return (
          <SwiperSlide key={image} className="image_swiper_slide">
            <img src={imageSource} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageSwiper;
