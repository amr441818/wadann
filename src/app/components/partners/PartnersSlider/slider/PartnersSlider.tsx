"use client";

import "./partners.css";

import { Autoplay, Navigation } from "swiper/modules";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { ItemSlider } from "../../Partners";

export default function PartnersSlider({ data }: { data: ItemSlider[] }) {
  console.log("data", data);
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
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Autoplay]}
          className="partners relative"
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
          {data?.map((item: ItemSlider, index) => (
            <>
              <SwiperSlide key={index}>
                <div className="flex  justify-center items-center w-full h-full flex-col gap-4">
                  <Image
                    width={133}
                    height={290}
                    src={item?.image}
                    className="w-[133px] h-[290px] "
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </>
          ))}
          <button className="absolute top-1/2 -translate-y-1/2 !left-0 z-10 swiper-button-prev !w-10 !h-10 rounded-full !bg-[#BA9F4B] flex items-center justify-center hover:!bg-[#BA9F4B] transition-colors">
            <span className="sr-only">Previous</span>
            <svg
              className="!w-6 !h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>{" "}
          <button className="absolute top-1/2 -translate-y-1/2 !right-0 z-10 swiper-button-next !w-10 !h-10 rounded-full !bg-[#BA9F4B] flex items-center justify-center hover:!bg-[#BA9F4B] transition-colors">
            <span className="sr-only">Next</span>
            <svg
              className="!w-6 !h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </Swiper>
      </div>
    </>
  );
}
