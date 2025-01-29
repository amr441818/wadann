// @ts-nocheck

import { CardWrwpper } from "../shared/card"
import Container from "../shared/container"
import Divider from "../shared/Divider"
import HeaderCarousal from "./components/HeaderCarousal/HeaderCarousal"
import ImageGalary from "./components/HeaderCarousal/ImageGalary/ImageGalary"
import RightSide from "./components/RightSide"
import FormPopup from "./components/FormPopup"
import { getSpacificProperyData } from "@/lib/serverActions"
import Image from "next/image"

const ProperityDetails = async ({ locale, slug }) => {


     const data = await getSpacificProperyData(slug)
    // console.log(data)
    const place = {
        id: "1",
        title: "Binghatti Skyrise",
        name: "Dubai Hills",
        price: 10023.6,
        currency: "AED",
    }
    const place1 = {
        id: "2",
        title: "Binghatti daf",
        name: "dfds Hills",
        price: 1006,
        currency: "Egp",
    }
    return (
        // <div className="flex flex-col ">
        <div className="flex flex-col justify-center gap-5 pb-10">
            <HeaderCarousal title={data?.data?.title} cityName={data?.data?.city} price={data?.data?.details?.price} currency={data?.data?.details?.currency}   images={data?.data?.images} />

            <ImageGalary  images={data?.data?.images} />

            <Container>
                <div className="grid grid-cols-12 lg:gap-[48px]">
                    <div className="flex flex-col  col-span-12 lg:col-span-8 gap-[40px] mb-10">
                        <div className="flex flex-col col-span-8 gap-4">
                            <h5 className="text-[28px]">Overview</h5>

                            <div className="grid grid-cols-12 gap-4 lg:gap-[40px]   ">
                                <div className="flex  col-span-12 lg:col-span-6 ">
                                    <div className="grid grid-cols-12 w-full gap-4">
                                        <span className="col-span-4 lg:col-span-6 text-[20px]">Type</span>

                                        {/* {data?.data?.types.map((type) => (
                                            <span key={type.id} className="col-span-8 lg:col-span-6 text-primary text-[20px]">
                                                {type.name}
                                            </span>
                                        ))} */}
                                        
                                            <span  className="col-span-8 lg:col-span-6 text-primary text-[20px]">
                                            {data?.data?.types[0]?.name}
                                            </span>
                                        
                                       
                                        <span className="col-span-4 lg:col-span-6  text-[20px]">Size</span>
                                        <span className="col-span-8 lg:col-span-6 text-primary text-[20px]">
                                        {data?.data?.details?.size} sqft
                                        </span>

                                        <span className="col-span-4 lg:col-span-6  text-[20px]">Baths</span>
                                        <span className="col-span-8 lg:col-span-6 text-primary text-[20px]"> {data?.data?.details?.min_bathrooms_count} </span>

                                        <span className="col-span-4 lg:col-span-6  text-[20px]">Year Built</span>
                                        <span className="col-span-8 lg:col-span-6 text-primary text-[20px]">2020</span>
                                    </div>
                                </div>
                                <div className="flex col-span-12 lg:col-span-6 ">
                                    <div className="grid grid-cols-12 w-full gap-4">
                                        <span className="col-span-4 lg:col-span-6 text-[20px]">Price</span>
                                        <span className="col-span-6 text-primary text-[20px]">{data?.data?.details?.price} AED</span>
                                        <span className="col-span-4 lg:col-span-6 text-[20px]">Beds</span>
                                        <span className="col-span-6 text-primary text-[20px]"> {data?.data?.details?.min_bedrooms_count}</span>

                                        <span className="col-span-4 lg:col-span-6 text-[20px]">Category</span>
                                        <span className="col-span-6 text-primary text-[20px]">{data?.data?.category?.name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="flex flex-col gap-[29px]">
                            <h5 className="text-[28px]">Payment Plan </h5>
                            <FormPopup />
                            {/* <button
                                type="button"
                                onClick={() => {
                                    setOpenForm((prev) => !prev)
                                }}
                            >
                                Reach Us For More
                            </button> */}
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1 items-start">
                                    <div className="flex items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#A37130"/>
<path d="M15.0002 16C14.4402 16 13.9902 15.55 13.9902 15C13.9902 14.45 14.4402 14 14.9902 14C15.5402 14 15.9902 14.45 15.9902 15C15.9902 15.55 15.5502 16 15.0002 16Z" fill="#A37130"/>
<path d="M9.01001 10C8.45001 10 8 9.55 8 9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9C10 9.55 9.56001 10 9.01001 10Z" fill="#A37130"/>
<path d="M8.99997 15.7495C8.80997 15.7495 8.61994 15.6795 8.46994 15.5295C8.17994 15.2395 8.17994 14.7595 8.46994 14.4695L14.4699 8.46945C14.7599 8.17945 15.24 8.17945 15.53 8.46945C15.82 8.75945 15.82 9.23951 15.53 9.52951L9.53 15.5295C9.38 15.6795 9.18997 15.7495 8.99997 15.7495Z" fill="#A37130"/>
</svg>

                                        <span className="text-[20px]">Down Payment</span>
                                    </div>

                                    <p className="ps-8 text-[18px] text-paragText">
                                    {data?.data?.down_payment}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1 items-start">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
                                                fill="#A37130"
                                            />
                                            <path
                                                d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
                                                fill="#A37130"
                                            />
                                            <path
                                                d="M20.5 9.83984H3.5C3.09 9.83984 2.75 9.49984 2.75 9.08984C2.75 8.67984 3.09 8.33984 3.5 8.33984H20.5C20.91 8.33984 21.25 8.67984 21.25 9.08984C21.25 9.49984 20.91 9.83984 20.5 9.83984Z"
                                                fill="#A37130"
                                            />
                                            <path
                                                d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z"
                                                fill="#A37130"
                                            />
                                            <path
                                                d="M8.5 14.5C8.37 14.5 8.24 14.47 8.12 14.42C8 14.37 7.89001 14.3 7.79001 14.21C7.70001 14.11 7.62999 14 7.57999 13.88C7.52999 13.76 7.5 13.63 7.5 13.5C7.5 13.24 7.61001 12.98 7.79001 12.79C7.89001 12.7 8 12.63 8.12 12.58C8.3 12.5 8.50001 12.48 8.70001 12.52C8.76001 12.53 8.82 12.55 8.88 12.58C8.94 12.6 9 12.63 9.06 12.67C9.11 12.71 9.15999 12.75 9.20999 12.79C9.24999 12.84 9.29999 12.89 9.32999 12.94C9.36999 13 9.40001 13.06 9.42001 13.12C9.45001 13.18 9.47001 13.24 9.48001 13.3C9.49001 13.37 9.5 13.43 9.5 13.5C9.5 13.76 9.38999 14.02 9.20999 14.21C9.01999 14.39 8.76 14.5 8.5 14.5Z"
                                                fill="#A37130"
                                            />
                                            <path
                                                d="M12 14.4999C11.74 14.4999 11.48 14.3899 11.29 14.2099C11.25 14.1599 11.21 14.1099 11.17 14.0599C11.13 13.9999 11.1 13.9399 11.08 13.8799C11.05 13.8199 11.03 13.7599 11.02 13.6999C11.01 13.6299 11 13.5699 11 13.4999C11 13.3699 11.03 13.2399 11.08 13.1199C11.13 12.9999 11.2 12.8899 11.29 12.7899C11.57 12.5099 12.02 12.4199 12.38 12.5799C12.51 12.6299 12.61 12.6999 12.71 12.7899C12.89 12.9799 13 13.2399 13 13.4999C13 13.5699 12.99 13.6299 12.98 13.6999C12.97 13.7599 12.95 13.8199 12.92 13.8799C12.9 13.9399 12.87 13.9999 12.83 14.0599C12.79 14.1099 12.75 14.1599 12.71 14.2099C12.61 14.2999 12.51 14.3699 12.38 14.4199C12.26 14.4699 12.13 14.4999 12 14.4999Z"
                                                fill="#A37130"
                                            />
                                            <path
                                                d="M8.5 17.9999C8.37 17.9999 8.24 17.9699 8.12 17.9199C8 17.8699 7.89001 17.7999 7.79001 17.7099C7.70001 17.6099 7.62999 17.5099 7.57999 17.3799C7.52999 17.2599 7.5 17.1299 7.5 16.9999C7.5 16.7399 7.61001 16.4799 7.79001 16.2899C7.89001 16.1999 8 16.1299 8.12 16.0799C8.49 15.9199 8.92999 16.0099 9.20999 16.2899C9.24999 16.3399 9.29999 16.3899 9.32999 16.4399C9.36999 16.4999 9.40001 16.5599 9.42001 16.6199C9.45001 16.6799 9.47001 16.7399 9.48001 16.8099C9.49001 16.8699 9.5 16.9399 9.5 16.9999C9.5 17.2599 9.38999 17.5199 9.20999 17.7099C9.01999 17.8899 8.76 17.9999 8.5 17.9999Z"
                                                fill="#A37130"
                                            />
                                        </svg>

                                        <span className="text-[20px]">Installments</span>
                                    </div>

                                    <p className="ps-8 text-[18px] text-paragText">
                                    {data?.data?.installments_payment}                                  </p>
                                </div>
                                <div className="flex flex-col gap-1 items-start">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.18014 22.7499C6.08014 22.7499 5.97014 22.7399 5.88014 22.7299L3.71014 22.4299C2.67014 22.2899 1.73014 21.3599 1.57014 20.2999L1.27014 18.1099C1.17014 17.4099 1.47014 16.4999 1.97014 15.9899L6.36014 11.5999C5.65014 8.75992 6.47014 5.75992 8.56014 3.68992C11.8001 0.459923 17.0701 0.449923 20.3201 3.68992C21.8901 5.25992 22.7501 7.34992 22.7501 9.56992C22.7501 11.7899 21.8901 13.8799 20.3201 15.4499C18.2201 17.5299 15.2301 18.3499 12.4101 17.6299L8.01014 22.0199C7.59014 22.4599 6.84014 22.7499 6.18014 22.7499ZM14.4301 2.75992C12.6801 2.75992 10.9401 3.41992 9.61014 4.74992C7.81014 6.53992 7.16014 9.15992 7.91014 11.5999C7.99014 11.8699 7.92014 12.1499 7.72014 12.3499L3.02014 17.0499C2.85014 17.2199 2.71014 17.6599 2.74014 17.8899L3.04014 20.0799C3.10014 20.4599 3.51014 20.8899 3.89014 20.9399L6.07014 21.2399C6.31014 21.2799 6.75014 21.1399 6.92014 20.9699L11.6401 16.2599C11.8401 16.0599 12.1301 15.9999 12.3901 16.0799C14.8001 16.8399 17.4301 16.1899 19.2301 14.3899C20.5101 13.1099 21.2201 11.3899 21.2201 9.56992C21.2201 7.73992 20.5101 6.02992 19.2301 4.74992C17.9301 3.42992 16.1801 2.75992 14.4301 2.75992Z"
                                                fill="#A37130"
                                            />
                                            <path
                                                d="M9.19008 20.5397C9.00008 20.5397 8.81008 20.4697 8.66008 20.3197L6.36008 18.0197C6.07008 17.7297 6.07008 17.2497 6.36008 16.9597C6.65008 16.6697 7.13008 16.6697 7.42008 16.9597L9.72008 19.2597C10.0101 19.5497 10.0101 20.0297 9.72008 20.3197C9.57008 20.4697 9.38008 20.5397 9.19008 20.5397Z"
                                                fill="#A37130"
                                            />
                                            <path
                                                d="M14.5 11.75C13.26 11.75 12.25 10.74 12.25 9.5C12.25 8.26 13.26 7.25 14.5 7.25C15.74 7.25 16.75 8.26 16.75 9.5C16.75 10.74 15.74 11.75 14.5 11.75ZM14.5 8.75C14.09 8.75 13.75 9.09 13.75 9.5C13.75 9.91 14.09 10.25 14.5 10.25C14.91 10.25 15.25 9.91 15.25 9.5C15.25 9.09 14.91 8.75 14.5 8.75Z"
                                                fill="#A37130"
                                            />
                                        </svg>

                                        <span className="text-[20px]">Handover Payment</span>
                                    </div>

                                    <p className="ps-8 text-[18px] text-paragText">
                                    {data?.data?.handover_payment}
                                    </p>
                                </div>
                            </div>
                            <Divider />
                            <div className="flex flex-col gap-[29px]">
                                <h5 className="text-[28px]">Description </h5>
                                <div className="flex flex-col gap-4">
                                    <p className="text-[20px] text-paragText">
                                       {data?.data?.description}
                                    </p>
                                    {/* <h5 className="text-[20px] text-paragText">Key Features:</h5>
                                    <ul className="list-disc list-inside pl-4">
                                        <li className="text-[20px] text-paragText">
                                            Prime Location: Nestled in the heart of Dubai, offering unparalleled views
                                            Gulf and the vibrant city skyline.
                                        </li>
                                        <li className="text-[20px] text-paragText">
                                            Iconic Architecture: A striking design that seamlessly blends timeless
                                            elegance with modern innovation.
                                        </li>
                                    </ul> */}
                                </div>
                            </div>

                            <Divider />
                            <div className="flex flex-col gap-[29px]">
                                <h5 className="text-[28px]">Amenities </h5>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                                        {data?.data?.amenities.map((amenity) => (

                                            <>
                                            <div className="flex items-center gap-4">
                                           <Image src={amenity?.image?.original_url} width={30} height={30} alt={amenity?.name} className="rounded-full w-[30px] h-[30px]" />
                                            <span className="text-[18px]">Spa & Wellness Center</span>
                                        </div>
                                        </>
                                        ))}
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right side */}

                    <RightSide location={data?.data?.location} locale={locale} videoSrc={data?.data?.video?.original_url}/>
                </div>
                <div className="flex flex-col gap-[29px] mt-[56px]">
                    <h5 className="text-[28px]">Similar Properties </h5>
                    <div className="flex flex-col lg:flex-row gap-[21px]">
                        <CardWrwpper place={place} imgUrl="/card.png" locale={locale} />
                        <CardWrwpper place={place1} imgUrl="/card.png" locale={locale} />
                        <CardWrwpper place={place1} imgUrl="/card.png" locale={locale} />
                    </div>
                </div>
            </Container>
        </div>
        // </div>
    )
}

export default ProperityDetails
