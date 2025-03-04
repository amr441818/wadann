"use client"

import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import Image from "next/image"
import Link from "next/link"
import { getProduct } from "@/lib/serverActions"
import { useTranslations } from "next-intl"

function ProductConect({ productData }: any) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const t = useTranslations()

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
    ]

    return (
        <div id="products" className="flex flex-col lg:flex-row items-center justify-center mt-32 mb-10">
            <div className="w-full lg:w-[30%] mx-auto p-4 space-y-2">
                <div className="flex flex-row-reverse items-center justify-center gap-5">
                    {/* Main Slider */}
                    <Swiper
                        modules={[FreeMode, Navigation, Thumbs]}
                        spaceBetween={10}
                        navigation
                        thumbs={{ swiper: thumbsSwiper }}
                        className="   mb-2 [&_.swiper-button-prev]:!hidden [&_.swiper-button-next]:!hidden h-[300px] lg:h-[500px]"
                    >
                        {productData?.images?.map((door: any) => (
                            <SwiperSlide key={door.id}>
                                <div className="aspect-[2/3] relative">
                                    <Image
                                        src={door?.path}
                                        width={400}
                                        alt={`door`}
                                        height={400}
                                        className="w-full h-[300px] lg:h-[500px] object-contain "
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
                        className="thumbs-slider h-[300px] lg:h-[500px] "
                    >
                        {productData?.images?.map((door: any) => (
                            <SwiperSlide key={door.id} className="cursor-pointer">
                                <div className="aspect-[2/3] relative">
                                    <Image
                                        src={door?.path}
                                        width={400}
                                        height={400}
                                        alt={`door`}
                                        className="w-[200px] h-[70px] lg:h-[120px] object-contain    opacity-60 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>{" "}
            <div className="w-full lg:w-[70%]">
                <div className="flex items-center gap-5 mr-4 mb-3">
                    <h2 className="text-2xl text-primary font-semibold">{productData?.title}</h2>
                    <span className="text-gray-400 font-bold">
                        {productData?.price} {t("price")}
                    </span>
                </div>
                {/* <div className="font-bold mb-3">{productData?.title}</div> */}
                <div className="flex items-center gap-4 mb-4">
                    <Image
                        src={productData?.color?.image}
                        width={400}
                        height={400}
                        alt={`door`}
                        className="w-[120px] h-[65px] object-contain    transition-opacity"
                    />
                    <Image
                        src={productData?.design?.image}
                        width={400}
                        height={400}
                        alt={`door`}
                        className="w-[40px] h-[65px] object-contain    transition-opacity"
                    />
                </div>

                <div className="text-[#767676] text-sm leading-7">
                    <p className="mb-5 " dangerouslySetInnerHTML={{ __html: productData?.content }}></p>
                    {/*  <p>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص
            هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من
            مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد النصوص
            الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق
          </p> */}
                </div>

                <Link
                    className="bg-primary text-white px-10 py-3    mt-5 inline-block"
                    target="_blank"
                    href={productData?.whatsapp_link}
                >
                    اطلب الان
                </Link>
            </div>
        </div>
    )
}

export default ProductConect
