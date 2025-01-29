import React from "react"
import MainLink from "../shared/main-link"
import { CardWrwpper } from "../shared/card"
import Container from "../shared/container"
import Image from "next/image"

import cupImg from "@/public/assets/img/Cup.png"
import { getHomeTopPalanProperyData } from "@/lib/serverActions"

const TopPlan =  async({ locale }: { locale: string }) => {

    const data = await getHomeTopPalanProperyData()
    console.log(data)

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
        <Container>
            <div className="flex  flex-col gap-8">
                <div className="flex  flex-col gap-4">
                    <div className="flex items-center justify-between w-full ">
                        <h6 className="text-6">Top Off Plan Properties</h6>
                        <MainLink
                            href={`properityDetails`}
                            locale={locale}
                            //   className=" translate-y-[100px] h-0 group-hover:translate-y-[-8px] group-hover:h-auto transition-all duration-1000"
                        >
                            {" "}
                            <div className="flex bg-gradient-to items-center gap-1 ">
                                <span className="text-[16px] text-primary">See All</span>
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
                </div>
                <div className="grid grid-cols-12 gap-5 w-full">


                  {data?.data?.map((item:any, index:number)=>{
                    if(index<3){
                        return (<div key={item.slug} className="col-span-12 lg:col-span-4 xl:col-span-4">
                            <CardWrwpper place={{id:item?.slug, title:item?.title, price:item?.price , currency:"Eg", name:item?.city?.name}} imgUrl={item?.cover?.original_url} locale={locale} />
                        </div>)
                    }
                    
})}

                    
                  

                </div>
            </div>
        </Container>
    )
}

export default TopPlan
