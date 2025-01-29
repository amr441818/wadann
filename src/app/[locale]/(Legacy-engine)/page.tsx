import Image from "next/image"
import HomeTabs from "@/app/components/shared/home-tabs"
import { CardWrwpper } from "@/app/components/shared/card"
import { HeaderWrwpper } from "@/app/components/shared/main-header"
import Filter from "@/app/components/filter"
import FilterSideMenu from "@/app/components/filter/components/FilterSideMenu"
import PhoneValidationExample from "@/app/components/shared/PhoneInput"
import CustomList from "@/app/components/Test"
import InfoSection from "@/app/components/home/InfoSection"
import teamImg from "@/public/assets/img/team.png"
import whoImg from "@/public/assets/img/who.png"
import DeveloperSection from "@/app/components/home/DeveloperSection"
import GetInTouchSection from "@/app/components/home/GetInTouchSection"

import imgBanner from "@/public/assets/img/homePanner.png"
import PropertyBanner from "@/app/components/filter/components/property-banner"
import DiscoverBannder from "@/app/components/filter/components/DiscoverBanner"
import PartnerBanner from "@/app/components/filter/components/PartnerBanner"
import TopAreas from "@/app/components/TopAreas"
import TopPlan from "@/app/components/TopPlan"
import AchievemetsSlider from "@/app/components/Achievements/slider/AchievemetsSlider"
import Achievements from "@/app/components/Achievements"
import Events from "@/app/components/events/Events"
import WhyUs from "@/app/components/WhyUs/WhyUs"
import {
    getHomeAchievementData,
    getHomeEventsData,
    getHomeHeaderData,
    getHomeTeamData,
    getHomeWhoWeAreData,
} from "@/lib/serverActions"
interface LayoutProps {
    params: Promise<{ locale: string | any }> // Handle both promise and object
}

export default async function HomePage({ params }: LayoutProps) {
    const { locale } = await params
    const headerdata = await getHomeHeaderData()
    const achievementsData = await getHomeAchievementData()
    const eventsData = await getHomeEventsData()
    const teamData = await getHomeTeamData()
    const whoWeAreData = await getHomeWhoWeAreData()















    return (
        <div className="min-h-[438px] w-full flex flex-col gap-[96px] justify-center pb-10">
            {/* <CustomList/> */}

            {/* <CustomList/> */}
            {/* <div className=" z-[999] "> */}

            {/* </div> */}
            <HeaderWrwpper data={headerdata} height=" h-[780px] lg:h-[668px]" isVidoeOrslider>
                <div className="flex flex-col items-center  h-full w-full absolute top-[118px] lg:top-[230px]">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-[24px] text-center  lg:text-[48px] font-medium ">
                            Discover Endless Property Opportunities
                        </h1>
                        <div className="text-[16px]   lg:text-[24px] text-center font-[300px] ">
                            Find the perfect property to buy, sell, or rent—all in one place.
                        </div>
                    </div>
                    <Filter filterType="home" />
                </div>
            </HeaderWrwpper>

            <InfoSection
                title="Meet Our Team"
                description={teamData?.data?.description}
                image={teamData?.data?.image?.original_url}
                btnText="Book a Consultation"
                btnLink="/"
            />
            <PropertyBanner locale={(await params).locale} />
            <TopAreas locale={(await params).locale} />

            <DeveloperSection
                locale={locale}
                title="Developers"
                description="We Deal with the best developers in the United Arab Emirates"
                image={teamImg}
                btnText="See All"
                btnLink="/"
            />

            <WhyUs />

            <DiscoverBannder locale={(await params).locale} />

            <InfoSection
                title="Who We Are"
                description={whoWeAreData?.data?.description}
                image={whoWeAreData?.data?.image?.original_url}
                btnText="Meet Our Founders"
                btnLink="/"
                reverse
            />

            <TopPlan locale={(await params).locale} />

            <Achievements achievements={achievementsData?.data} locale={(await params).locale} />

            <PartnerBanner locale={(await params).locale} />
            <Events events={eventsData?.data} locale={(await params).locale} />

            <GetInTouchSection />
        </div>
    )
}
