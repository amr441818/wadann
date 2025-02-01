import {
  getHomeAchievementData,
  getHomeData,
  getHomeEventsData,
  getHomeHeaderData,
  getHomeTeamData,
  getHomeWhoWeAreData,
} from "@/lib/serverActions";

import Achievements from "@/app/components/Achievements";
import AchievemetsSlider from "@/app/components/Achievements/slider/AchievemetsSlider";
import BlogsHome from "@/app/components/home/BlogsHome";
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
import Statistics from "@/app/components/home/Statistics";
import TopAreas from "@/app/components/TopAreas";
import TopPlan from "@/app/components/TopPlan";
import WhyUs from "@/app/components/WhyUs/WhyUs";
import imgBanner from "@/public/assets/img/homePanner.png";
import teamImg from "@/public/assets/img/team.png";
import whoImg from "@/public/assets/img/who.png";
import Products from "@/app/components/products/Products";
import Partners from "@/app/components/partners/Partners";
import ContactForm from "@/app/components/contactForm/ContactForm";

interface LayoutProps {
  params: Promise<{ locale: string | any }>; // Handle both promise and object
}

export default async function HomePage({ params }: LayoutProps) {
  const { locale } = await params;

  const homeData = await getHomeData();
  // const achievementsData = await getHomeAchievementData();
  // const eventsData = await getHomeEventsData();
  // const teamData = await getHomeTeamData();
  // const whoWeAreData = await getHomeWhoWeAreData();

  return (
    <div className="min-h-[438px] w-full flex flex-col gap-[96px] justify-center pb-10">
      {/* <CustomList/> */}

      {/* <CustomList/> */}
      {/* <div className=" z-[999] "> */}

      {/* </div> */}



      <HeaderWrwpper
        data={homeData?.data?.sliders}
        height=" h-[580px] lg:h-[508px]"
        isVidoeOrslider
      >
       
      </HeaderWrwpper>




      <InfoSection
        title={homeData?.data?.about?.title}
        description={homeData?.data?.about?.content}
        image={homeData?.data?.about?.image}
        btnText="Book a Consultation"
        btnLink="/"
      />
 <Products
        products={homeData?.data?.products}
        locale={(await params).locale}
      />
 <Partners
        partners={homeData?.data?.partners}
        locale={(await params).locale}
      />
<OurServices services={homeData?.data?.services} locale={(await params).locale} />
<Statistics counters={homeData?.data?.counters} locale={(await params).locale} />
<BlogsHome blogs={homeData?.data?.posts} locale={(await params).locale} />


      {/* <PropertyBanner locale={(await params).locale} /> */}
      {/* <TopAreas locale={(await params).locale} /> */}

      {/* <DeveloperSection
        locale={locale}
        title="Developers"
        description="We Deal with the best developers in the United Arab Emirates"
        image={teamImg}
        btnText="See All"
        btnLink="/"
      /> */}

      {/* <WhyUs /> */}

      {/* <DiscoverBannder locale={(await params).locale} /> */}

      {/* <InfoSection
        title="Who We Are"
        description={whoWeAreData?.data?.description}
        image={whoWeAreData?.data?.image?.original_url}
        btnText="Meet Our Founders"
        btnLink="/"
        reverse
      /> */}

     

      {/* <TopPlan locale={(await params).locale} /> */}

     

      {/* <PartnerBanner locale={(await params).locale} /> */}
      {/* <Events events={eventsData?.data} locale={(await params).locale} /> */}

      {/* <GetInTouchSection /> */}
      <ContactForm/>
    </div>
  );
}
