"use client"
import React from "react"

import Container from "../shared/container"
import ProductSlider from "./ProductSlider/slider/ProductSlider"

interface Image {
    id: number
    file_name: string
    original_url: string
    extension: string
    size: number
}

export interface ItemSlider {
    id: number
    title: string
    image: Image
}

const Products = ({ locale, achievements }: { locale: string; achievements: ItemSlider[] }) => {
    return (
        <Container>
            <div className="flex  flex-col gap-8">
                <div className="flex  justify-center gap-4">
                    {/* @ts-ignore */}
                    <h6 className=" text-center text-[24px] text-primary font-bold">المنتجات</h6>

                  
                </div>
                {/* @ts-ignore */}
                <ProductSlider data={achievements?.data} />
            </div>
        </Container>
    )
}

export default Products
