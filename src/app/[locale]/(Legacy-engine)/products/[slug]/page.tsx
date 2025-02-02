"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Container from "@/app/components/shared/container";
import Image from "next/image";

const DoorSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const doors = [
    {
      id: 1,
      src: "/api/placeholder/400/600",
      alt: "Brown wooden door with ornate panels",
    },
    {
      id: 2,
      src: "/api/placeholder/400/600",
      alt: "Light colored wooden door design",
    },
    {
      id: 3,
      src: "/api/placeholder/400/600",
      alt: "Beige wooden door variant",
    },
    {
      id: 4,
      src: "/api/placeholder/400/600",
      alt: "Gray wooden door design",
    },
  ];

  return (
    <div className="w-full mx-auto p-4 space-y-2 mt-32">
      <Container className="">
        {/* Main Slider */}
        <Swiper
          modules={[FreeMode, Navigation, Thumbs]}
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          className="rounded-lg shadow-xl mb-2 [&_.swiper-button-prev]:!hidden [&_.swiper-button-next]:!hidden  w-[200px]"
        >
          {doors.map((door) => (
            <SwiperSlide key={door.id}>
              <div className="aspect-[2/3] relative">
                <Image
                  src={"https://pixlr.com/images/generator/text-to-image.webp"}
                  width={400}
                  alt={`door`}
                  height={400}
                  className="w-full h-full object-cover "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Slider */}
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Navigation, Thumbs]}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          className="thumbs-slider [&_.swiper-wrapper]:flex-col w-[65px] "
        >
          {doors.map((door) => (
            <SwiperSlide key={door.id} className="cursor-pointer">
              <div className="aspect-[2/3] relative">
                <Image
                  src={"https://pixlr.com/images/generator/text-to-image.webp"}
                  width={400}
                  height={400}
                  alt={`door`}
                  className="w-full h-full object-cover rounded-md opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default DoorSlider;

/* import Container from '@/app/components/shared/container'
import React from 'react'

function page() {
  return (
    <div className='mt-32'>
        <Container>
            <div>dasasd</div>
        </Container>
    </div>
  )
}

export default page */
