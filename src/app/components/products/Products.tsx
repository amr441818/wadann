"use client";

import Container from "../shared/container";
import ProductSlider from "./ProductSlider/slider/ProductSlider";
import React from "react";
import { useTranslations } from "next-intl";

export interface ProductItem {
  id: number;
  title: string;
  short: {
    ar: string;
    en: string;
  };
  image: string;
}

const Products = ({
  locale,
  products,
}: {
  locale: string;
  products: ProductItem[];
}) => {
  const t = useTranslations("Header");
  return (
    <div id="products">
      <Container>
        <div className="flex  flex-col gap-8">
          <div className="flex  justify-center gap-4">
            {/* @ts-ignore */}
            <h6 className="unique-h text-center text-[24px] text-primary font-bold">
              {t("products")}
            </h6>
          </div>
          {/* @ts-ignore */}
          <ProductSlider data={products} locale={locale}/>
        </div>
      </Container>
    </div>
  );
};

export default Products;
