"use client"
import React from "react"

import Container from "../shared/container"
import PartnersSlider from "./PartnersSlider/slider/PartnersSlider"




export interface ItemSlider {
    id: number
    title: string
    image: string
}

const Partners = ({ locale, partners }: { locale: string; partners: ItemSlider[] }) => {
    return (
        <Container>
            <div className="flex  flex-col gap-8">
                <div className="flex  justify-center gap-4">
                    {/* @ts-ignore */}
                    <h6 className=" text-center text-[24px] font-bold text-primary">عملائنا وشركاؤنا</h6>

                  
                </div>
                {/* @ts-ignore */}
                <PartnersSlider data={partners} />
            </div>
        </Container>
    )
}

export default Partners
