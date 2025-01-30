"use client";

import "swiper/css/pagination";
import "../Achievements/slider/AchievemetsSlider.css";

import Container from "../shared/container";
import { Icon } from "@iconify/react";
import MainLink from "../shared/main-link";

function Statistics({ locale }: { locale: string }) {
  return (
    <div className="bg-primary">
      <Container>
        <h2 className="text-3xl font-bold text-white mt-10 mb-5 text-center">احصائيات عامة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl text-center px-5 py-7 text-white"
            >
              <div className="mb-2 flex items-center justify-center">
                <span className="text-3xl font-bold">430+</span>
              </div>
              <h3 className="text-lg font-bold mb-2">
                عدد العملاء
              </h3>
              <p className="text-gray-400 mb-5 text-sm px-5">
                هنا نبذة تفصيلية بسيطة للاحصائيات المعروضة
              </p>

             
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Statistics;
