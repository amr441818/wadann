/* @ts-nocheck */

"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import MainLink from "../main-link";
import React from "react";
import { useTranslations } from "next-intl";

/* @ts-ignore */
function RightSideFooter({ data, language }) {
  const t = useTranslations("Header");

  // 🔹 احفظ القيم النصية في متغيرات قبل استخدامها في المصفوفة
  const importantLinks = t("important-links");
  const home = t("home");
  const whoWeAre = t("whoWeAre");
  const products = t("products");
  const doorDesign = t("doorDesign");
  const services = t("services");
  const ourPartners = t("ourPartners");
  const blogs = t("blogs");
  const contactUs = t("contact-us");
  const followUs = t("follow-us");
  const copyright = t("copyright");

  const cols = [
    // { value: t("home"), path: `/` },
   


    {
      title: importantLinks,
      links: [
        { value: home, path: "/" },
        { value: whoWeAre, path: "who-we-are" },
        { value: products,  path: "/#products"  },
        { value: doorDesign, path: "design-door" },
      ],
    },
    {
      title: "",
      links: [
        { value: services, path: "/#services" },
        { value: ourPartners, path: "/#our-partners" },
        { value: blogs, path: "/#blogs" },
        { value: contactUs, path: "/contact-us" },
      ],
    },
  ];
/* @ts-ignore */
  const socialLinks = data?.socials?.reduce((acc, social) => {
    acc[social?.key] = social?.value;
    return acc;
  }, {});
 console.log(socialLinks, "dfdfdfd")
  return (
    <>
      {cols.map((col) => (
        <div key={col.title || "empty"}>
          <h3 className={`font-semibold ${col.title ? "mb-2" : "mb-8"}`}>
            {col.title}
          </h3>
          <div className="flex flex-col">
            {col.links?.map((item) => (
              <MainLink
                className="my-1 lg:my-3 block text-white/70 hover:text-white duration-200"
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
        <h3 className="font-semibold mb-10">{followUs}</h3>
        <div className="flex flex-wrap gap-4">
          {[
            { icon: "basil:whatsapp-outline", key: "whatsapp" },
            { icon: "ic:outline-snapchat", key: "snapchat" },
            { icon: "hugeicons:instagram", key: "instagram" },
            { icon: "ic:baseline-facebook", key: "facebook" },
            // { icon: "ph:tiktok-logo", key: "tiktok" },
          ].map(({ icon, key }) => (
            <Link
              key={key}
              className="border border-white rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center hover:bg-white hover:text-black duration-200"
              href={socialLinks?.[key] || "/"}
            >
              <Icon icon={icon} />
            </Link>
          ))}
        </div>

        {/* copyright */}
        <div className="mt-7">{copyright}</div>
      </div>
    </>
  );
}

export default RightSideFooter;






/* "use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import MainLink from "../main-link";
import React from "react";
import { useTranslations } from "next-intl";

function RightSideFooter({ data, language }) {
  const t = useTranslations("Header");


  const importantLinks = t("important-links");
  const home = t("home");
  const whoWeAre = t("whoWeAre");
  const products = t("products");
  const doorDesign = t("doorDesign");
  const services = t("services");
  const ourPartners = t("ourPartners");
  const blogs = t("blogs");
  const contactUs = t("contact-us");
  const followUs = t("follow-us");
  const copyright = t("copyright");

  const cols = [
    {
      title: importantLinks,
      links: [
        { value: home, path: "/" },
        { value: whoWeAre, path: "who-we-are" },
        { value: products, path: "/" },
        { value: doorDesign, path: "/" },
      ],
    },
    {
      title: "",
      links: [
        { value: services, path: "/" },
        { value: ourPartners, path: "/" },
        { value: blogs, path: "blogs" },
        { value: contactUs, path: "/" },
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
        <h3 className={`font-semibold mb-10`}>{followUs}</h3>
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

        <div className="mt-7">{copyright}</div>
      </div>
    </>
  );
}

export default RightSideFooter;
 */