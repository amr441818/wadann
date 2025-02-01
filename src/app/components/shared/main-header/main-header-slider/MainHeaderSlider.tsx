"use client"
import { Swiper, SwiperSlide } from "swiper/react"


import "swiper/css"
import "./MainHeaderSlider.css"


import { Autoplay } from "swiper/modules"
import { useTranslations } from "next-intl"

import Image from "next/image"
import Container from "../../container"
import { Files } from "lucide-react"


interface Slider {
    id: number;
    sort: number;
    name: string;
    content: string;
    image: string;
    link: string | null;
  }
 type sliderProps = {
    files: Slider[]
 }
export default function MainHeaderSlider(props:sliderProps) {

  console.log("filse" , props.files)


    const t = useTranslations() 
  
   


    return (
        <>
            <div className="">
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    //   autoplay={{
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    //   }}
                     speed={700}
                      loop
                    
                    modules={ [Autoplay]}
                    className="MainHeaderSlider z-0 "
                    style={{ zIndex: "0px" }}
                >




                    {props?.files?.map((file, index)=> {
                        return (<> <SwiperSlide key={index} >
                            <div className="grid grid-cols-12 h-full w-full bg-primary">
                                <div className="flex col-span-6 w-full items-end ">  
                                      <Image width={569} height={419} src={file?.image} alt={file?.name} className="!w-[569px] h-[419px] " />
                                      
                                      </div>
                                <div className="flex w-full col-span-6 items-center justify-end">

                                    <div className="flex flex-col items-start w-full text-white gap-[26px]">
                                        <h1 className="text-[35px] font-bold w-[334px]">    {file?.name}</h1>
                                        <p className="w-[291px] text-start text-[16px] text-gray-300">  {file?.content}</p>
                                    </div>
                                </div>

                            </div>
                        
                        </SwiperSlide></>)
                    })}
                 
                   
                </Swiper>
            </div>
        </>
    )
}
