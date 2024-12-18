"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay ,} from 'swiper/modules';
// import "swiper/css";
// import "swiper/css/navigation";
const Home = () => {
  return (
    <div className='flex w-screen min-h-screen'>
      <div className='w-3/4 bg-gray-400 overflow-hidden max-h-full'>
        <div className='flex flex-col w-full h-full'>
          <div className='w-full h-1/2 bg-yellow-300 '>
            image
          </div>
          <Swiper
           modules={[Navigation,Pagination,A11y,  Autoplay]}
           spaceBetween={20}
          //  slidesPerView={5}
           loop={true}
           autoplay={{
           delay: 700, // 3 seconds
           disableOnInteraction: false,
           }}
           speed={1000}
           breakpoints={{
             320: { slidesPerView: 2 },
             640: { slidesPerView: 2 },
             768: { slidesPerView: 3 },
             1024: { slidesPerView: 5 },
           }}
             className='flex justify-center w-full items-center gap-3 py-4 swiper bg-red-300  h-1/4'>
            <SwiperSlide className='bg-green-500 rounded-full h-full w-full '></SwiperSlide>
            <SwiperSlide className='bg-green-200 rounded-full h-full w-full'></SwiperSlide>
            <SwiperSlide className='bg-green-500 rounded-full h-full w-full'></SwiperSlide>
            <SwiperSlide className='bg-green-600 rounded-full h-full w-full'></SwiperSlide>
            <SwiperSlide className='bg-green-700 rounded-full h-full w-full'></SwiperSlide>
            <SwiperSlide className='bg-green-100 rounded-full h-full w-full'></SwiperSlide>
            <SwiperSlide className='bg-green-900 rounded-full h-full w-full'></SwiperSlide>
          </Swiper>
          <Swiper
           modules={[Navigation,Pagination,A11y,  Autoplay]}
           spaceBetween={20}
          //  slidesPerView={5}
           loop={true}
           autoplay={{
           delay: 700, // 3 seconds
           disableOnInteraction: false,
           }}
           speed={1000}
           breakpoints={{
             320: { slidesPerView: 2 },
             640: { slidesPerView: 2 },
             768: { slidesPerView: 3 },
             1024: { slidesPerView: 5 },
           }}
             className='flex justify-center w-full items-center gap-3 py-4 swiper bg-red-800  h-1/4'>
            <SwiperSlide className='bg-green-500 rounded-md h-full w-full '></SwiperSlide>
            <SwiperSlide className='bg-green-200 rounded-md h-full w-full'></SwiperSlide>
            <SwiperSlide className='bg-green-500 rounded-md h-full w-full'></SwiperSlide>
            <SwiperSlide className='bg-green-600 rounded-md h-full w-full'></SwiperSlide>
            <SwiperSlide className='bg-green-700 rounded-md h-full w-full'></SwiperSlide>
            <SwiperSlide className='bg-green-100 rounded-md h-full w-full'></SwiperSlide>
            <SwiperSlide className='bg-green-900 rounded-md h-full w-full'></SwiperSlide>
          </Swiper>
          
          
        </div>
      </div>
      <div className='w-1/4 bg-red-500 overflow-hidden max-h-full'>
        saeflnwfnwflw
      </div>
    </div>
  )
}

export default Home