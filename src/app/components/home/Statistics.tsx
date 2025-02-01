"use client";

import "swiper/css/pagination";
import "../Achievements/slider/AchievemetsSlider.css";

import Container from "../shared/container";
import { Icon } from "@iconify/react";
import MainLink from "../shared/main-link";
interface Counter {
  id: number;
  sort: number;
  name: string;
  content: string;
  count: number;
  image: string;
}

function Statistics({ locale, counters }: { locale: string, counters:Counter[]  }) {
  return (
    <div className="bg-primary">
      <Container>
        <h2 className="text-3xl font-bold text-white mt-10 mb-5 text-center">احصائيات عامة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {counters?.map((item:Counter, index) => (
            <div
              key={index}
              className="rounded-3xl text-center px-5 py-7 text-white"
            >
              <div className="mb-2 flex items-center justify-center">
                <span className="text-3xl font-bold">{item?.count}+</span>
              </div>
              <h3 className="text-lg font-bold mb-2">
{item.name}              </h3>
              <p className="text-gray-400 mb-5 text-sm px-5">
{item.content}              </p>

             
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Statistics;
