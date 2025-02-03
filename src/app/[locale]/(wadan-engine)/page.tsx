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
import OfferSlider from "@/app/components/offers/OfferSlider/OfferSlider";
import Container from "@/app/components/shared/container";

interface LayoutProps {
  params: Promise<{ locale: string | any }>; // Handle both promise and object
}

export default async function HomePage({ params }: LayoutProps) {
  const { locale } = await params;

  const homeData = await getHomeData(locale);


  return (
    <div className="min-h-[438px] w-full flex flex-col gap-[96px] justify-center pb-10">
  

      <HeaderWrwpper
        data={homeData?.data?.sliders}
        height=" h-[580px] lg:h-[508px]"
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
      <Container>

      <OfferSlider files={homeData?.data?.banners} />
      
      </Container>
      <OurServices
        services={homeData?.data?.services}
        locale={(await params).locale}
      />
      <Partners
        partners={homeData?.data?.partners}
        locale={(await params).locale}
      />
      
      <Statistics
        counters={homeData?.data?.counters}
        locale={(await params).locale}
      />
      <BlogsHome blogs={homeData?.data?.posts} locale={(await params).locale} />

     
    </div>
  );
}
