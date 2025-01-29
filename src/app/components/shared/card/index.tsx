import React from "react"
import "./card.css"
import Image from "next/image"
import MainLink from "../main-link"

type CardWrwpper = {
    children?: React.ReactNode
    className?: string
    imgUrl: string
    locale?: string
    place?: { id: string; title: string; name: string; price: number; currency: string }
}

export const CardWrwpper = (props: CardWrwpper) => {
    return (
        <div
            className={`h-[439px] w-full relative rounded-[16px] group overflow-hidden transition-all duration-1000 group ${
                props.className ? props.className : ""
            }`}
        >
            <Image src={props.imgUrl} fill alt="property image" className="rounded-[16px] object-cover" />
            <div className="card-overlay rounded-[24px]"></div>
            {props.place && (
                <div className=" flex flex-col gap-4 justify-end z-40 p-4 absolute top-0 left-0 h-full w-full">
                    <div className="flex flex-col gap-1 w-full ">
                        <h4 className="text-[24px] text-[#FFFFFF]">{props?.place?.title}</h4>
                        <div className="flex justify-between w-full items-center">
                            <span className="text-[16px] font-[300] text-[#FFFFFF]">{props?.place?.name}</span>
                            <span className="text-[16px] font-medium text-[#FFFFFF]">
                                 {props?.place?.price}
                                {props?.place?.currency}
                            </span>
                        </div>
                    </div>

                    <MainLink
                        href={`properity-details/${props?.place?.id}`}
                        locale={props?.locale!!}
                        className=" translate-y-[100px] h-0 group-hover:translate-y-[-8px] group-hover:h-auto transition-all duration-1000"
                    >
                        <div className="flex bg-gradient-to items-center gap-1 ">
                            <span className="text-[16px]">View Property</span>
                            <span className="p-1 flex items-center justify-center">
                                <svg
                                    width="16"
                                    height="9"
                                    viewBox="0 0 16 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 4.5C0 4.67082 0.070238 4.83465 0.195262 4.95543C0.320287 5.07622 0.489856 5.14408 0.666667 5.14408L13.724 5.14408L10.8627 7.90847C10.7412 8.02995 10.674 8.19264 10.6756 8.36152C10.6771 8.53039 10.7472 8.69194 10.8708 8.81135C10.9944 8.93077 11.1616 8.99851 11.3364 8.99998C11.5112 9.00144 11.6796 8.93652 11.8053 8.8192L15.8053 4.95472C15.867 4.89547 15.916 4.82502 15.9494 4.74742C15.9828 4.66983 16 4.58662 16 4.50258V4.5C16 4.41627 15.9827 4.33254 15.948 4.25396C15.9148 4.17588 15.8658 4.10494 15.804 4.04528L11.804 0.180801C11.6783 0.0634765 11.5099 -0.00144314 11.3351 2.43479e-05C11.1603 0.00149183 10.9931 0.0692289 10.8695 0.188647C10.7458 0.308064 10.6757 0.469608 10.6742 0.638483C10.6727 0.807359 10.7399 0.970055 10.8613 1.09153L13.724 3.85592L0.666667 3.85592C0.489856 3.85592 0.320287 3.92378 0.195262 4.04457C0.070238 4.16536 0 4.32918 0 4.5Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                        </div>
                    </MainLink>
                </div>
            )}

            {props.children && (
                <div className={`absolute rounded-[24px] w-full h-full top-0 left-0 z-50 text-white`}>
                    {" "}
                    {props.children}
                </div>
            )}
        </div>
    )
}
