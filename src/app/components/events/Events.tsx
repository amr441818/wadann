"use client"
import React from "react"

import Container from "../shared/container"
import EventsSlider from "./slider/eventsSlider"
import { ItemSlider } from "../Achievements"

const Events = ({ locale, events }: { events: ItemSlider[]; locale: string }) => {
    return (
        <Container>
            <div className="flex  flex-col gap-8">
                <div className="flex  flex-col gap-4">
                    {/* @ts-ignore */}
                    <h6 className="text-[32px]">{events?.data?.header?.title}</h6>

                    <p className="text-mainText text-[20px]">
                        {/* @ts-ignore */}
                        {events?.data?.header?.description}
                    </p>
                </div>
                {/* @ts-ignore */}
                <EventsSlider events={events?.data} />
            </div>
        </Container>
    )
}

export default Events
