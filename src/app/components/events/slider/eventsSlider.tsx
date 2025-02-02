"use client";

import "./eventsSlider.css";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import Container from "../../shared/container";
import Image from "next/image";
import { ItemSlider } from "../../Achievements";
import e1 from "@/public/assets/img/e1.png";
import e2 from "@/public/assets/img/e2.png";
import e3 from "@/public/assets/img/e3.png";
import e4 from "@/public/assets/img/e4.png";

// Import Swiper React components


// Import Swiper styles




// import required modules
// import { Pagination } from 'swiper/modules';









export default function EventsSlider({events} :{events: ItemSlider[]}) {
  return (
    <>
     
        <div dir="ltr">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
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
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="events "
          >
            {events?.map((event, index) => (<><SwiperSlide key={event?.id}>
              {" "}
              <div className="flex   w-full h-full flex-col gap-4">
                <Image
                  width={305}
                  height={234}
                  src={event?.image?.original_url}
                  className="w-[305px] h-[234px] "
                  alt=""
                />
            <span>{event?.title}</span>
              </div>
            </SwiperSlide></>))}
           

          </Swiper>
        </div>
      
    </>
  );
}
