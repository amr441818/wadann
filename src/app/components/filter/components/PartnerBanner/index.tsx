import Container from "@/app/components/shared/container"
import { HeaderWrwpper } from "@/app/components/shared/main-header"
import MainLink from "@/app/components/shared/main-link"
import { getHomePartnerBannerData } from "@/lib/serverActions"
import React from "react"

const PartnerBanner = async ({ locale }: { locale: string }) => {
    const partenerData = await getHomePartnerBannerData()
    return (
        <HeaderWrwpper height=" h-[780px] lg:h-[668px]" imgUrl={partenerData?.data?.image?.original_url}>
            <div className="flex flex-col justify-center items-center  h-full w-full ">
                <Container className="flex justify-center items-center">
                    <div className="flex flex-col gap-6 w-[300px] lg:w-full">
                        <h1 className="text-[24px] text-center  lg:text-[48px] font-medium ">
                            {partenerData?.data?.title}
                        </h1>
                        <div className="text-[16px]   lg:text-[24px] text-center font-[300px]  ">
                            {partenerData?.data?.description}
                        </div>
                        <div className="flex justify-center">
                            <MainLink
                                href="/list-your-property"
                                locale={locale}
                                className="border py-4 rounded-[8px] px-8"
                            >
                                Join Us Now
                            </MainLink>
                        </div>
                    </div>
                </Container>
            </div>
        </HeaderWrwpper>
    )
}

export default PartnerBanner
