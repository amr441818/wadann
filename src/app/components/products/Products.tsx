"use client"
import React from "react"

import Container from "../shared/container"
import ProductSlider from "./ProductSlider/slider/ProductSlider"


export interface ProductItem {
    id: number;
    title: string;
    short: {
      ar: string;
      en: string;
    };
    image: string;
  }


const Products = ({ locale, products }: { locale: string; products: ProductItem[] }) => {
    return (
        <Container>
            <div className="flex  flex-col gap-8">
                <div className="flex  justify-center gap-4">
                    {/* @ts-ignore */}
                    <h6 className=" text-center text-[24px] text-primary font-bold">المنتجات</h6>

                  
                </div>
                {/* @ts-ignore */}
                <ProductSlider data={products} />
            </div>
        </Container>
    )
}

export default Products
