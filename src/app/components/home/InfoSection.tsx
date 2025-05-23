"use client";
// @ts-nocheck

import Container from "../shared/container";
import Image from "next/image";
import MainLink from "../shared/main-link";
import React from "react";
import myImage from "@/public/card.png";
import { useTranslations } from "next-intl";

function InfoSection({
  title,
  description,
  image,
  btnText,
  btnLink,
  reverse,
  noButton = false,
}: {
  title: string;
  description: string;
  image: any;
  btnText: string;
  btnLink: string;
  reverse?: boolean;
  noButton?: boolean;
}) {
  const t = useTranslations("WhoWeAre");
  
  return (
    <section className="bg-background mt-16">
      <Container>
        <div
          className={`flex flex-col gap-7 lg:gap-[95px] ${
            reverse ? "lg:flex-row-reverse " : "lg:flex-row"
          }  items-center`}
        >
          <div className="lg:w-[30%] lg:max-w-[300px] mb-0">
            <Image
              width={1000}
              height={1000}
              src={image}
              alt="Our Team"
              className="w-[300px] h-[300px] object-cover   "
            />
          </div>
          <div className="w-full lg:w-[70%] flex flex-col items-center lg:items-start  max-lg:mt-5">
            <h2
              className={`unique-h text-[22px] lg:text-[32px]  ${
                reverse ? "" : "mb-5 lg:mb-7"
              } text-primary font-bold`}
            >
               {t("who-we-are")} 
            </h2>
            <p className="text-muted-foreground mb-4 font-light text-[16px] lg:text-xl max-lg:mb-5">
              {description}
            </p>
            {noButton && (
              <div className="w-full flex justify-end">
                <MainLink
                  href={btnLink}
                  className="text-secondary-foreground bg-primary px-6 py-4    text-white inline-block mr-auto hover:bg-white hover:text-primary border hover:border-primary"
                >
                  {btnText}
                </MainLink>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default InfoSection;
