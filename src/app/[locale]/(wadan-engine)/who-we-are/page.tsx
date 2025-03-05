import Container from "@/app/components/shared/container";
import Image from "next/image";
import InfoSection from "@/app/components/home/InfoSection";
import React from "react";
import { getAboutUs } from "@/lib/serverActions";
interface LayoutProps {
  params: Promise<{ locale: string | any }> // Handle both promise and object
}
async function page({params}:LayoutProps) {
  const { locale } = await params

  const { data: aboutUs } = await getAboutUs(locale)

  console.log('about us:', aboutUs.page)
  return (
    <Container className="mb-10 mt-32">
      <div>
        <InfoSection
          title= { aboutUs?.page? aboutUs?.page?.title :"who-we-are"}
          description={aboutUs?.page? aboutUs?.page?.content:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق"
          }
          image={aboutUs?.page? aboutUs?.page?.image:
            "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA="
          }
          btnText="Book a Consultation"
          btnLink="/"
        />

        <div className="mt-10">
          <div className="flex ">
            <div className={`border-2 border-primary border-dashed ${locale=== "en" ? "border-l-0" : "border-r-0"} border-b-0 w-full pb-14`}>
              <div className="flex items-center gap-3 bg-bodyColor w-fit px-5 py-2    -translate-y-1/2">
                <div className="w-[50px] h-[50px]   flex items-center justify-center bg-[#580C31]/20">
                  <Image
                    src={aboutUs?.sections[0].image}
                    width={72}
                    height={72}
                    alt={aboutUs?.sections[0].title}
                    className="w-[57px] h-[49px]  p-4 "
                  />
                </div>
                <h2 className="font-bold text-xl text-primary">{aboutUs?.sections[0].title}</h2>
              </div>
              <p className="text-muted-foreground mb-4 font-light text-lg max-lg:mb-5 pl-5">
              {aboutUs?.sections[0].content}
              </p>
            </div>
            <div className="hidden md:block w-full"></div>
          </div>

          <div className="flex ">
            <div className={`hidden md:block w-[45%] ${aboutUs?.sections[2] && "border-2 border-primary border-dashed border-l-0 border-b-0"} !mr-5`}></div>
            <div className="w-full md:w-[55%] pb-14">
              <div className="flex items-center gap-3 bg-bodyColor w-fit px-5 py-2    -translate-y-1/2">
                <div className="w-[50px] h-[50px]   flex items-center justify-center bg-[#580C31]/20">
                  <Image
                    src={aboutUs?.sections[1].image}
                    width={72}
                    height={72}
                    alt={aboutUs?.sections[1].title}
                    className="w-[57px] h-[49px]  p-4 "
                  />
                </div>
                <h2 className="font-bold text-xl text-primary">{aboutUs?.sections[1].title}</h2>
              </div>
              <p className="text-muted-foreground mb-4 font-light text-lg max-lg:mb-5 pl-5">
              {aboutUs?.sections[0].content}
              </p>
            </div>
          </div>

         {aboutUs?.sections[2] && ( <div className="flex ">
            <div className="w-full">
              <div className="flex items-center gap-3 bg-bodyColor w-fit  py-2    -translate-y-1/2">
                <div className="w-[50px] h-[50px]   flex items-center justify-center bg-[#580C31]/20">
                  <Image
                    src={aboutUs?.sections[2].image}
                    width={57}
                    height={49}
                    alt={aboutUs?.sections[2].title}
                    className="w-[57px] h-[49px]  p-4 "
                  />
                </div>
                <h2 className="font-bold text-xl text-primary">{aboutUs?.sections[2].title}</h2>
              </div>
              <p className="text-muted-foreground mb-4 font-light text-lg max-lg:mb-5 pl-5">
              {aboutUs?.sections[2].content}
              </p>
            </div>
            <div className="hidden md:block w-full"></div>
          </div>)}
        </div>
      </div>
    </Container>
  );
}

export default page;
