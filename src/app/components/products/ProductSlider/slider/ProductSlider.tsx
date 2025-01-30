"use client";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css/pagination";

import "./productSlider.css";

import Image from "next/image";

import { Autoplay } from "swiper/modules";
import { ItemSlider } from "@/app/components/Achievements";


export default function ProductSlider({data}: {data: ItemSlider[]}) {
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
            className="productsSlider "
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


            
           {Array.from([1,3,4,5,6,7,8,9,10])?.map((item, index) => (<>
            <SwiperSlide key={index}>
              
              <div className="flex  justify-center items-center w-full h-full flex-col gap-4">
                <Image
                  width={133}
                  height={290}
                  src="/assets/img/door.png"
                  className="w-[133px] h-[290px] "
                  alt=""
                />
                <div className="flex flex-col items-center gap-[5px]">
                <span>TR - 33 - M4</span>
            <p className="text-[11px] w-[80%] text-center">هنا نبذة تفصيلية بسيطة عن نوع الباب ومميزاته</p>
              </div>
                </div>
            
            </SwiperSlide>
      </>))}
          

          </Swiper>
        </div>
      
    </>
  );
}
