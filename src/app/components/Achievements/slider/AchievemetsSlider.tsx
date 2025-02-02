"use client";

import "./AchievemetsSlider.css";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { ItemSlider } from "..";

export default function AchievemetsSlider({data}: {data: ItemSlider[]}) {
  return (
    <>
    
        <div dir="ltr">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            dir="ltr"
            modules={[Autoplay]}
            className="achivements "
            breakpoints={{
              // When the viewport width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // When the viewport width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // When the viewport width is >= 768px
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              // When the viewport width is >= 1024px
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            
           {data?.map((item, index) => (<>
            <SwiperSlide key={index}>
              
              <div className="flex  justify-center items-center w-full h-full flex-col gap-4">
                <Image
                  width={80}
                  height={160}
                  src={item?.image?.original_url}
                  className="w-[80px] h-[160px] "
                  alt=""
                />
            <span>{item?.title}</span>
              </div>
            </SwiperSlide></>))}
          

          </Swiper>
        </div>
      
    </>
  );
}
