"use client"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./headerCarousal.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
// Importing the translation hook
type fileType= {
  id: number,
  file_name: string,
  original_url: string
  extension: string,
  size: number,
}

export default function HeaderCarousal({title, cityName, currency ,price, images} : {price:number, title: string , cityName:string, currency:string,images:fileType[]}) {

  const [windowWidth, setWindowWidth] = useState(0);


    const t = useTranslations() // Using the translation hook
    const handleResize = () => {
      setWindowWidth(window?.innerWidth);
    };
  
    useEffect(() => {
      // Set up the event listener for window resizing
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on component unmount
      return () => {
        window?.removeEventListener('resize', handleResize);
      };
    }, [])


const i = 0
    return (
        <>
            <div className="">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    pagination={{
                        clickable: true,
                    }}
                      loop
                    navigation={windowWidth < 768 ? false : true}
                    modules={windowWidth < 768 ? [Autoplay, Pagination]:[Autoplay, Pagination, Navigation]}
                    className="headerCarousal z-0 "
                    style={{ zIndex: "0px" }}
                >

                  {images?.map((image) => (
                    
                    <SwiperSlide key={image?.id}>
                    <div className="slider-overlay "></div>
                    <div className=" hidden md:flex flex-col gap-4 justify-end z-40 p-4 absolute top-0 left-0 h-full w-full">
                        <div className="flex flex-col gap-1 w-full py-[40px] px-[80px] ">
                            <h4 className="text-[24px] text-start text-[#FFFFFF]">{title}</h4>
                            <div className="flex justify-between w-full items-center">
                                <span className="text-[16px] font-[300] text-[#FFFFFF]">{cityName}</span>
                                <span className="text-[16px] font-medium text-[#FFFFFF]">{`${price} ${currency} `}</span>
                            </div>
                        </div>
                        {}
                    </div>
                    <Image fill src={image.original_url} alt="" className="object-cover" />
                </SwiperSlide>


                  ))}
               
                   
                </Swiper>
            </div>
        </>
    )
}
