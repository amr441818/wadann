"use client"
import { Swiper, SwiperSlide } from "swiper/react"


import "swiper/css"
import "./MainHeaderSlider.css"


import { Autoplay } from "swiper/modules"
import { useTranslations } from "next-intl"

import Image from "next/image"


interface FileData {
    id: number;
    file_name: string;
    original_url: string;
    extension: string;
    size: number;
  }
 type sliderProps = {
    files: FileData[]
 }
export default function MainHeaderSlider(props:sliderProps) {

  


    const t = useTranslations() 
  
   


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
                    
                    modules={ [Autoplay]}
                    className="MainHeaderSlider z-0 "
                    style={{ zIndex: "0px" }}
                >

                    {props?.files?.map((file, index)=> {
                        return (<> <SwiperSlide key={index} >
                   
                            <Image fill src={file?.original_url} alt={file?.file_name} className="bg-cover " />
                        </SwiperSlide></>)
                    })}
                    
                   
                </Swiper>
            </div>
        </>
    )
}
