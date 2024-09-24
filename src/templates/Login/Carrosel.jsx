
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Carrosel.css';

function Carrossel() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <img src="img/corte1.svg" alt="Corte 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/corte2.svg" alt="Corte 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/corte3.svg" alt="Corte 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/corte4.svg" alt="Corte 4" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carrossel;