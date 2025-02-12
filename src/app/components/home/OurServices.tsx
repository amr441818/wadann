"use client";



import Container from "../shared/container";
import { Icon } from "@iconify/react";
import Image from "next/image";
import MainLink from "../shared/main-link";
import { useTranslations } from "next-intl";

interface Service {
  id: number;
  name: string;
  content: string;
  image: string;
}

function OurServices({
  locale,
  services,
}: {
  locale: string;
  services: Service[];
}) {
  const t = useTranslations("Header");
  return (
    <div className="">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services?.map((item: Service, index) => (
            <div
              key={index}
              className="bg-gray-200/70 rounded-3xl text-center px-5 py-7"
            >
              <div className="mb-2 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={47}
                  height={47}
                  className=" w-[47px] h-[47px] text-primary "
                />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {item?.name}{" "}
              </h3>
              <p className="text-paragText mb-5 text-sm">{item?.content} </p>

              <MainLink
                className="px-5 py-2 bg-primary hover:bg-white hover:text-primary border hover:border-primary"
                locale={locale}
                href="/"
              >
                {t("order-now")}
              </MainLink>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default OurServices;
