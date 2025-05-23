"use client";

import "./MainHeaderSlider.css";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Container from "../../container";
import { Files } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Slider {
  id: number;
  sort: number;
  name: string;
  content: string;
  image: string;
  link: string | null;
}
type sliderProps = {
  files: Slider[];
};
export default function MainHeaderSlider(props: sliderProps) {
  

  const t = useTranslations();

  return (
    <>
      <div className="">
        <Swiper
          spaceBetween={0}
          // centeredSlides={true}
            autoplay={{
              delay: 3000,

              disableOnInteraction: false,
            }}
          speed={700}
          loop
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          className="MainHeaderSlider z-0 [&_.swiper-pagination]:lg:!left-[35%] [&_.swiper-pagination]:lg:!bottom-[30px]"
          style={{ zIndex: "0px" }}
        >
          {props?.files?.map((file, index) => {
            return (
              
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-12 h-full w-full bg-primary">
                    <div className="flex col-span-12 lg:col-span-6 w-full items-end justify-center ">
                      <Image
                        width={569}
                        height={419}
                        src={file?.image}
                        priority
                        alt={file?.name}
                        className="!w-[250px] h-[250px] lg:!w-[569px] lg:h-[419px] object-cover"
                      />
                    </div>
                    <div className="flex col-span-12 lg:col-span-6 items-center justify-center lg:justify-end">
                      <div className="flex flex-col items-start w-full text-white gap-[26px]">
                        <h1 className="text-[20px] lg:text-[35px] font-bold lg:w-[334px] mx-auto">
                          {" "}
                          {file?.name}
                        </h1>
                        <p className="text-[13px] lg:text-[16px] lg:w-[291px] text-start text-gray-300 mx-auto">
                          {" "}
                          {file?.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
