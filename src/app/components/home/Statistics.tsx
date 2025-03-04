"use client";


import Container from "../shared/container";
import { Icon } from "@iconify/react";
import MainLink from "../shared/main-link";
import { useTranslations } from "next-intl";

interface Counter {
  id: number;
  sort: number;
  name: string;
  content: string;
  count: number;
  image: string;
}

function Statistics({
  locale,
  counters,
}: {
  locale: string;
  counters: Counter[];
}) {
  const t = useTranslations("Header");

  return (
    <div className="bg-primary">
      <Container>
        <div className="flex items-center justify-center">
          <h2 className="unique-h after:!border-white/50 z-0 text-3xl font-bold text-white mt-10 mb-5 text-center">
            {t("general-statistics")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {counters?.map((item: Counter, index) => (
            <div
              key={index}
              className="   text-center px-5 py-7 text-white"
            >
              <div className="mb-2 flex items-center justify-center">
                <span className="text-3xl font-bold">{item?.count}+</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.name} </h3>
              <p className="text-gray-400 mb-5 text-sm px-5">{item.content} </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Statistics;
