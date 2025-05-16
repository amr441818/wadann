"use client";

import Container from "../shared/container";
import PartnersSlider from "./PartnersSlider/slider/PartnersSlider";
import React from "react";
import { useTranslations } from "next-intl";

export interface ItemSlider {
  id: number;
  title: string;
  image: string;
}

const Partners = ({
  locale,
  partners,
}: {
  locale: string;
  partners: ItemSlider[];
}) => {
  const t = useTranslations("Header");
  return (
    <div id="our-partners">

    <Container>
      <div className="flex  flex-col gap-8">
        <div className="flex  justify-center gap-4">
          {/* @ts-ignore */}
          <h6 className="unique-h text-center text-[22px] lg:text-3xl font-bold text-primary">
            {t("ourPartners")}
          </h6>
        </div>
        {/* @ts-ignore */}
        <PartnersSlider data={partners} />
      </div>
    </Container>
    </div>
  );
};

export default Partners;
