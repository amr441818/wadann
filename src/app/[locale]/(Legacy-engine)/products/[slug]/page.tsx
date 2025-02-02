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
      src: "/assets/img/door.png",
      alt: "Brown wooden door with ornate panels",
    },
    {
      id: 2,
      src: "/assets/img/sm-door.png",
      alt: "Light colored wooden door design",
    },
    {
      id: 3,
      src: "/assets/img/wood.png",
      alt: "Beige wooden door variant",
    },
    {
      id: 4,
      src: "/assets/img/door.png",
      alt: "Gray wooden door design",
    },
  ];

  return (
    <Container>
      <div className="flex items-center justify-center mt-32">
        <div className="w-[30%] mx-auto p-4 space-y-2">
          <div className="flex flex-row-reverse items-center justify-center gap-5">
            {/* Main Slider */}
            <Swiper
              modules={[FreeMode, Navigation, Thumbs]}
              spaceBetween={10}
              navigation
              thumbs={{ swiper: thumbsSwiper }}
              className="rounded-lg shadow-xl mb-2 [&_.swiper-button-prev]:!hidden [&_.swiper-button-next]:!hidden h-[500px]"
            >
              {doors.map((door) => (
                <SwiperSlide key={door.id}>
                  <div className="aspect-[2/3] relative">
                    <Image
                      src={door.src}
                      width={400}
                      alt={`door`}
                      height={400}
                      className="w-full h-[500px] object-cover "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnail Slider */}
            <Swiper
            //@ts-ignore
              onSwiper={setThumbsSwiper}
              modules={[FreeMode, Navigation, Thumbs]}
              spaceBetween={10}
              slidesPerView={4}
              direction="vertical"
              freeMode={true}
              watchSlidesProgress={true}
              className="thumbs-slider h-[500px] "
            >
              {doors.map((door) => (
                <SwiperSlide key={door.id} className="cursor-pointer">
                  <div className="aspect-[2/3] relative">
                    <Image
                      src={door.src}
                      width={400}
                      height={400}
                      alt={`door`}
                      className="w-[300px] h-[120px] object-cover rounded-md opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>{" "}
        <div className="w-[70%]">
          <div className="flex items-center gap-5 mr-4 mb-3">
            <h2 className="text-2xl text-primary font-semibold">
              عنوان / اسم الباب
            </h2>
            <span className="text-gray-400 font-bold">870 SR </span>
          </div>
          <div className="font-bold mb-3">TR - 33 - M4</div>
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={"/assets/img/wood.png"}
              width={400}
              height={400}
              alt={`door`}
              className="w-[120px] h-[65px] object-contain rounded-md transition-opacity"
            />
            <Image
              src={"/assets/img/sm-door.png"}
              width={400}
              height={400}
              alt={`door`}
              className="w-[40px] h-[65px] object-contain rounded-md transition-opacity"
            />
          </div>

          <div className="text-[#767676] text-sm leading-7">
            <p className="mb-5 ">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق
            </p>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق
            </p>
          </div>

          <button className="bg-primary text-white px-10 py-3 rounded-3xl mt-5">
            اطلب الان
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DoorSlider;