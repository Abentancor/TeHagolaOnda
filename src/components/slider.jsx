import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';




export default () => {
  return (
    <div className='bg-yellow-100 rounded border-1 border-yellow-400'>
    <Swiper
      modules={[Pagination,Autoplay]}
      autoplay={{delay:3000 }}
      pagination={{ clickable: true }}
      spaceBetween={100}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
        <SwiperSlide> <div className='slider m-2 '><img src="/assets/Pandesalavado.jpg" alt="" />Pan de Salvado</div>  </SwiperSlide>
        <SwiperSlide> <div className='slider m-2 '><img src="/assets/Medialunas.png" alt="" />Medialunas</div> </SwiperSlide>
        <SwiperSlide> <div className='slider m-2 '><img src="/assets/facturas.jpg" alt="" />Facturas</div> </SwiperSlide>
        <SwiperSlide> <div className='slider m-2 '><img src="/assets/tortas.jpg" alt="" />Tortas</div> </SwiperSlide>
    </Swiper>
    </div>
  );
};