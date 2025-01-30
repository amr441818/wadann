import {
  getHomeAchievementData,
  getHomeEventsData,
  getHomeHeaderData,
  getHomeTeamData,
  getHomeWhoWeAreData,
} from "@/lib/serverActions";

import Achievements from "@/app/components/Achievements";
import AchievemetsSlider from "@/app/components/Achievements/slider/AchievemetsSlider";
import { CardWrwpper } from "@/app/components/shared/card";
import CustomList from "@/app/components/Test";
import DeveloperSection from "@/app/components/home/DeveloperSection";
import DiscoverBannder from "@/app/components/filter/components/DiscoverBanner";
import Events from "@/app/components/events/Events";
import Filter from "@/app/components/filter";
import FilterSideMenu from "@/app/components/filter/components/FilterSideMenu";
import GetInTouchSection from "@/app/components/home/GetInTouchSection";
import { HeaderWrwpper } from "@/app/components/shared/main-header";
import HomeTabs from "@/app/components/shared/home-tabs";
import Image from "next/image";
import InfoSection from "@/app/components/home/InfoSection";
import OurServices from "@/app/components/home/OurServices";
import PartnerBanner from "@/app/components/filter/components/PartnerBanner";
import PhoneValidationExample from "@/app/components/shared/PhoneInput";
import PropertyBanner from "@/app/components/filter/components/property-banner";
import TopAreas from "@/app/components/TopAreas";
import TopPlan from "@/app/components/TopPlan";
import WhyUs from "@/app/components/WhyUs/WhyUs";
import imgBanner from "@/public/assets/img/homePanner.png";
import teamImg from "@/public/assets/img/team.png";
import whoImg from "@/public/assets/img/who.png";

interface LayoutProps {
  params: Promise<{ locale: string | any }>; // Handle both promise and object
}

export default async function HomePage({ params }: LayoutProps) {
  const { locale } = await params;

  const headerdata = await getHomeHeaderData();
  const achievementsData = await getHomeAchievementData();
  const eventsData = await getHomeEventsData();
  const teamData = await getHomeTeamData();
  const whoWeAreData = await getHomeWhoWeAreData();

  return (
    <div className="min-h-[438px] w-full flex flex-col gap-[96px] justify-center pb-10">
      {/* <CustomList/> */}

      {/* <CustomList/> */}
      {/* <div className=" z-[999] "> */}

      {/* </div> */}
      <HeaderWrwpper
        data={headerdata}
        height=" h-[780px] lg:h-[668px]"
        isVidoeOrslider
      >
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
        title="من نحن"
        description={
          "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق"
        }
        image={teamData?.data?.image?.original_url}
        btnText="Book a Consultation"
        btnLink="/"
      />

<OurServices locale={(await params).locale} />


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

      <Achievements
        achievements={achievementsData?.data}
        locale={(await params).locale}
      />

      <PartnerBanner locale={(await params).locale} />
      <Events events={eventsData?.data} locale={(await params).locale} />

      <GetInTouchSection />
    </div>
  );
}
