"use client"

import "../Achievements/slider/AchievemetsSlider.css"

import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay } from "swiper/modules"
import MainLink from "../shared/main-link"

function DeveloperSlider({ reverse, locale, data }: { reverse?: boolean; locale: string; data: any[] }) {
    console.log("datazzzzzzzz", data)

    return (
        <>
            <div dir="ltr">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    dir="ltr"
                    modules={[Autoplay]}
                    className=""
                    loop
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
                    {data?.slice(5).map((item, index) => (
                        <SwiperSlide key={index}>
                            <div key={index} className="bg-borderbg rounded-xl p-[1px]">
                                <MainLink
                                    locale={locale}
                                    href={`developers/${item?.id}`}
                                    className="text-center min-h-[100px] flex items-center justify-center text-2xl !text-primary px-5 rounded-xl !text-white  bg-[#080808]"
                                >
                                    {item?.name}
                                </MainLink>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default DeveloperSlider
