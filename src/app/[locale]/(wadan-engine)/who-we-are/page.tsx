import Container from "@/app/components/shared/container";
import Image from "next/image";
import InfoSection from "@/app/components/home/InfoSection";
import React from "react";

function page() {
  return (
    <Container className="mb-10 mt-32">
      <div>
        <InfoSection
          title="who-we-are"
          description={
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها التطبيق"
          }
          image={
            "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA="
          }
          btnText="Book a Consultation"
          btnLink="/"
        />

        <div className="mt-10">
          <div className="flex ">
            <div className="border-2 border-primary border-dashed border-r-0 border-b-0 w-full pb-14">
              <div className="flex items-center gap-3 bg-bodyColor w-fit px-5 py-2 rounded-lg -translate-y-1/2">
                <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#580C31]/20">
                  <Image
                    src="/assets/img/message-primary.png"
                    width={72}
                    height={72}
                    alt="contact us form"
                    className="w-[57px] h-[49px]  p-4 "
                  />
                </div>
                <h2 className="font-bold text-xl text-primary">رسالتنا</h2>
              </div>
              <p className="text-muted-foreground mb-4 font-light text-lg max-lg:mb-5 pl-5">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها
                التطبيق هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
                تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                النص أو العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى
                يولدها التطبيق
              </p>
            </div>
            <div className="hidden md:block w-full"></div>
          </div>

          <div className="flex ">
            <div className="hidden md:block w-[45%] border-2 border-primary border-dashed border-l-0 border-b-0 !mr-5"></div>
            <div className="w-full md:w-[55%] pb-14">
              <div className="flex items-center gap-3 bg-bodyColor w-fit px-5 py-2 rounded-lg -translate-y-1/2">
                <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#580C31]/20">
                  <Image
                    src="/assets/img/goal-primary.png"
                    width={72}
                    height={72}
                    alt="contact us form"
                    className="w-[57px] h-[49px]  p-4 "
                  />
                </div>
                <h2 className="font-bold text-xl text-primary">رسالتنا</h2>
              </div>
              <p className="text-muted-foreground mb-4 font-light text-lg max-lg:mb-5 pl-5">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها
                التطبيق هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
                تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                النص أو العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى
                يولدها التطبيق
              </p>
            </div>
          </div>

          <div className="flex ">
            <div className="w-full">
              <div className="flex items-center gap-3 bg-bodyColor w-fit  py-2 rounded-lg -translate-y-1/2">
                <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#580C31]/20">
                  <Image
                    src="/assets/img/view-primary.png"
                    width={57}
                    height={49}
                    alt="contact us form"
                    className="w-[57px] h-[49px]  p-4 "
                  />
                </div>
                <h2 className="font-bold text-xl text-primary">رسالتنا</h2>
              </div>
              <p className="text-muted-foreground mb-4 font-light text-lg max-lg:mb-5 pl-5">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى يولدها
                التطبيق هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
                تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                النص أو العديد النصوص الأخرى إضاف إلى زيادة عدد الحروف التى
                يولدها التطبيق
              </p>
            </div>
            <div className="hidden md:block w-full"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default page;
