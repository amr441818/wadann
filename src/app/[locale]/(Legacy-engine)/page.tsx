/* @ts-nocheck */

import BlogsHome from "@/app/components/home/BlogsHome";
import { HeaderWrwpper } from "@/app/components/shared/main-header";
import InfoSection from "@/app/components/home/InfoSection";
import OurServices from "@/app/components/home/OurServices";
import Partners from "@/app/components/partners/Partners";
import Products from "@/app/components/products/Products";
import Statistics from "@/app/components/home/Statistics";
import {
  getHomeData,
} from "@/lib/serverActions";

interface LayoutProps {
  params: Promise<{ locale: string | any }>; // Handle both promise and object
}

export default async function HomePage({ params }: LayoutProps) {
  const { locale } = await params;

  const homeData = await getHomeData(locale);
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
        // className="rounded-full"
        isVidoeOrslider
      ></HeaderWrwpper>

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
      <OurServices
        services={homeData?.data?.services}
        locale={(await params).locale}
      />
      <Statistics
        counters={homeData?.data?.counters}
        locale={(await params).locale}
      />
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
      {/* <ContactForm/> */}
    </div>
  );
}
