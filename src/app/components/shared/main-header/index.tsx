import React from "react"
import "./main-header.css"
import MainHeaderSlider from "./main-header-slider/MainHeaderSlider"
type HeaderWrwpperProps = {
    children: React.ReactNode
    className?: string
    height?: string
    imgUrl?: string
    isVidoeOrslider?: boolean
    data?: any
}

export const HeaderWrwpper = (props: HeaderWrwpperProps) => {
    const h = `${props?.height}`
    return (
        <div className="p-2">
            <div
                style={{
                    backgroundImage: `url(${props.imgUrl ? props.imgUrl : ""})`,
                    backgroundPosition: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "center",
                    backgroundPositionX: "center",
                }}
                className={`${
                    props.height ? `${props?.height}` : " h-[392px]"
                } bg-cover w-full relative rounded-[24px]  ${props.className ? props.className : ""} `}
            >
                {props?.isVidoeOrslider && props?.data?.data?.images.length > 0 && (
                    <MainHeaderSlider files={props?.data?.data?.images} />
                )}
                {props?.isVidoeOrslider && props?.data?.data?.video !== null && (
                    <>
                        <div className=" !h-[668px] rounded-[24px] w-full">
                            <video
                                className="!w-full h-[668px] object-cover rounded-[24px]"
                                src={props?.data?.data?.video?.original_url}
                                autoPlay
                                loop
                                muted
                            />
                        </div>
                    </>
                )}

                <div className="overlay rounded-[24px] "></div>
                <div className="absolute rounded-[24px] w-full  h-full top-0 left-0  z-50 text-white">
                    {" "}
                    {props.children}
                </div>
            </div>
        </div>
    )
}
