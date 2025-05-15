"use client";

import "./Offer.css";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Files } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Slider {
  id: number;

  name: string;

  image: string;
  link: string | null;
}
type sliderProps = {
  files: Slider[];
};
export default function ProjectsSlider(props: sliderProps) {
 

  const t = useTranslations();

  return (
    <>
      <div className="">
        <Swiper
          spaceBetween={30}
          // centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={700}
          loop
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          className="offerSlider z-0 [&_.swiper-pagination]:z-10   !overflow-visible !overflow-x-clip"
          style={{ zIndex: "0px" }}
        >
          {props?.files?.map((file, index) => {
            return (
              
               
                <SwiperSlide key={index}>
                  <div  className=" w-full   ">
                    <Image
                      src={file.image}
                      alt={file.image}
                      width={500}
                      height={500}
                      className="w-full h-[329px]    object-cover "
                    />
                  </div>
                </SwiperSlide>
             
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
