"use client"
import React from "react"

import Container from "../shared/container"
import AchievemetsSlider from "./slider/AchievemetsSlider"
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

const Achievements = ({ locale, achievements }: { locale: string; achievements: ItemSlider[] }) => {
    return (
        <Container>
            <div className="flex  flex-col gap-8">
                <div className="flex  flex-col gap-4">
                    {/* @ts-ignore */}
                    <h6 className="text-[32px]">{achievements?.data?.header?.title}</h6>

                    <p className="text-paragText text-[20px]">
                        {/* @ts-ignore */}
                        {achievements?.data?.header?.description}
                    </p>
                </div>
                {/* @ts-ignore */}
                <AchievemetsSlider data={achievements?.data} />
            </div>
        </Container>
    )
}

export default Achievements
