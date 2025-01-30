"use client"
import React from "react"

import Container from "../shared/container"
import PartnersSlider from "./PartnersSlider/slider/PartnersSlider"


interface Image {
    id: number
    file_name: string
    original_url: string
    extension: string
    size: number
}

export interface ItemSlider {
    id: number
    title: string
    image: Image
}

const Partners = ({ locale, achievements }: { locale: string; achievements: ItemSlider[] }) => {
    return (
        <Container>
            <div className="flex  flex-col gap-8">
                <div className="flex  justify-center gap-4">
                    {/* @ts-ignore */}
                    <h6 className=" text-center text-[24px] font-bold text-primary">عملائنا وشركاؤنا</h6>

                  
                </div>
                {/* @ts-ignore */}
                <PartnersSlider data={achievements?.data} />
            </div>
        </Container>
    )
}

export default Partners
