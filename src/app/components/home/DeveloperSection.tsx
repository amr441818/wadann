// @ts-nocheck
import React from "react"
import Container from "../shared/container"
import Image from "next/image"
import myImage from "@/public/card.png"
import MainLink from "../shared/main-link"
import { getHomeDeveloperData } from "@/lib/serverActions"
import { Swiper, SwiperSlide } from "swiper/react"
import DeveloperSlider from "./DeveloperSlider"

async function DeveloperSection({
    title,
    description,
    btnText,
    btnLink,
    reverse,
    locale,
}: {
    title: string
    description: string
    image: any
    btnText: string
    btnLink: string
    reverse?: boolean
    locale: string
}) {
    const data = await getHomeDeveloperData()
    const moreData = [
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
    ]

    const d1 = [
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
    ]?.slice(0, 4)
    const d2 = [
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
        ...data?.data?.data,
    ]?.slice(5)

    console.log("aaaaaaaaaaaaaaaaaaa d1", d1)
    console.log("aaaaaaaaaaaaaaaaaaa d2", d2)
    console.log("aaaaaaaaaaaaaaaaaaa moreData", moreData)

    return (
        <section className="bg-black text-white py-10 px-5 lg:px-0">
            <Container className="overflow-hidden">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-[32px]">{data?.data?.header?.title}</h2>
                    <MainLink className="text-2xl" href={btnLink}>
                        {btnText}
                    </MainLink>
                </div>
                <p className="text-muted-foreground  mb-10 font-light text-xl">{data?.data?.header?.description}</p>
                {
                    <div className="ml-5 mt-10">
                        <DeveloperSlider
                            data={[
                                ...data?.data?.data,
                                ...data?.data?.data,
                                ...data?.data?.data,
                                ...data?.data?.data,
                                ...data?.data?.data,
                                ...data?.data?.data,
                                ...data?.data?.data,
                                ...data?.data?.data,
                                ...data?.data?.data,
                            ]}
                            reverse={reverse}
                            locale={locale}
                        />
                    </div>
                }
                <div className="ml-10">
                    {d1 && (
                        <div className="ml-5 mt-10">
                            <DeveloperSlider
                                data={[
                                    ...data?.data?.data,
                                    ...data?.data?.data,
                                    ...data?.data?.data,
                                    ...data?.data?.data,
                                    ...data?.data?.data,
                                    ...data?.data?.data,
                                    ...data?.data?.data,
                                    ...data?.data?.data,
                                    ...data?.data?.data,
                                ]}
                                reverse={reverse}
                                locale={locale}
                            />
                        </div>
                    )}
                </div>
            </Container>
        </section>
    )
}

export default DeveloperSection
