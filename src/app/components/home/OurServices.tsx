"use client";

import "swiper/css/pagination";
import "../Achievements/slider/AchievemetsSlider.css";

import Container from "../shared/container";
import { Icon } from "@iconify/react";
import MainLink from "../shared/main-link";

function OurServices({ locale }: { locale: string }) {
  return (
    <div className="">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[1,2,3,4].map((item, index) => (
            <div key={index} className="bg-gray-200/70 rounded-3xl text-center px-5 py-7">
              <div className="mb-2 flex items-center justify-center">
                <Icon
                  icon="basil:phone-outline"
                  className="text-6xl text-primary "
                />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                طلب رفع مقاسات
              </h3>
              <p className="text-paragText mb-5 text-sm">
                هنا نبذة تفصيلية بسيطة الخدمة المقدمة من الشركة
              </p>

              <MainLink className="px-5 py-2 bg-primary" locale={locale} href="/">
                اطلب الآن
              </MainLink>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default OurServices;
