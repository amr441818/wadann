// @ts-nocheck

import Container from "../shared/container";
import Image from "next/image";
import MainLink from "../shared/main-link";
import React from "react";
import myImage from "@/public/card.png";

function InfoSection({
  title,
  description,
  image,
  btnText,
  btnLink,
  reverse,
}: {
  title: string;
  description: string;
  image: any;
  btnText: string;
  btnLink: string;
  reverse?: boolean;
}) {
  return (
    <section className="bg-background px-5 lg:px-0 mt-16">
      <Container>
        <div
          className={`flex flex-col gap-7 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }  items-center`}
        >
          <div className="w-full lg:w-1/2 mb-0 h-[350px]">
            <Image
              width={100}
              height={100}
              src={image}
              alt="Our Team"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 max-lg:mt-5">
            <h2
              className={`text-[32px] ${
                reverse ? "" : "mb-5 lg:mb-7"
              } text-primary font-bold`}
            >
              {title}
            </h2>
            <p className="text-muted-foreground mb-4 font-light text-xl max-lg:mb-5">
              {description}
            </p>
            <div className="w-full flex justify-end">
              <MainLink
                href={btnLink}
                className="text-secondary-foreground bg-primary px-6 py-4 rounded-2xl text-white inline-block mr-auto"
              >
                {btnText}
              </MainLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default InfoSection;
