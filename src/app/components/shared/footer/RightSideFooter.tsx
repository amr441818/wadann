"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import MainLink from "../main-link";
import React from "react";
import { useTranslations } from "next-intl";

function RightSideFooter({ data, language }) {
  const t = useTranslations("Header");
  const cols = [
    {
      title: t("important-links"),
      links: [
        { value: t("home"), path: "/" },
        { value: t("whoWeAre"), path: "who-we-are" },
        { value: t("products"), path: "/" },
        { value: t("doorDesign"), path: "/" },
      ],
    },
    {
      title: "",
      links: [
        { value: t("services"), path: "/" },
        { value: t("ourPartners"), path: "/" },
        { value: t("blogs"), path: "blogs" },
        { value: t("contact-us"), path: "/" },
      ],
    },
  ];
  const myObject = {};

  for (let i = 0; i < data?.socials?.length; i++) {
    myObject[data?.socials[i]?.key] = data?.socials[i]?.value;
  }
  return (
    <>
      {cols.map((col) => (
        <div key={col.title}>
          <h3 className={`font-semibold ${col.title ? "mb-2" : "mb-8"}`}>
            {col.title}
          </h3>
          <div className="flex flex-col">
            {col.links.map((item) => (
              <MainLink
                className="my-1 lg:my-3 block text-white/70"
                key={item.value}
                locale={language}
                href={item.path}
              >
                {item.value}
              </MainLink>
            ))}
          </div>
        </div>
      ))}

      <div>
        <h3 className={`font-semibold mb-10`}>{t("follow-us")}</h3>
        <div className="flex flex-wrap gap-4">
          <Link
            className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
            href={myObject?.whatsapp || "home"}
          >
            <Icon icon="basil:whatsapp-outline" />
          </Link>
          <Link
            className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
            locale={language}
            href={myObject?.snapchat || "home"}
          >
            <Icon icon="ic:outline-snapchat" />
          </Link>
          <Link
            className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
            locale={language}
            href={myObject?.instagram || "home"}
          >
            <Icon icon="hugeicons:instagram" />
          </Link>
          <Link
            className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
            locale={language}
            href={myObject?.twitter || "home"}
          >
            <Icon icon="pajamas:twitter" />
          </Link>
          <Link
            className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
            locale={language}
            href={myObject?.tiktok || "home"}
          >
            <Icon icon="ph:tiktok-logo" />
          </Link>
        </div>
        {/* copyright */}
        <div className="mt-7">{t("copyright")}</div>
      </div>
    </>
  );
}

export default RightSideFooter;
