"use client";

import "./Offer.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import { Files } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Slider {
  id: number;
 
  name: string;
 
  image: string;
  link: string | null;
}
type sliderProps = {
  files: Slider[];
};
export default function OfferSlider(props: sliderProps) {
  console.log("filse", props.files);

  const t = useTranslations();

  return (
    <>
      <div className="">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          speed={700}
          loop
          modules={[Autoplay]}
          className="offerSlider z-0 "
          style={{ zIndex: "0px" }}
        >
          {props?.files?.map((file, index) => {
            return (
              <>
                {" "}
                
                <SwiperSlide key={index}>
                  <div className=" w-full rounded-[24px]">


                 <Image src={file.image} alt={file.image} width={500} height={500}   className="w-full h-[329px] rounded-[24px] object-cover " />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
