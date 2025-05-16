// @ts-nocheck

"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import MainLink from "../../../main-link";
import { NavbarMenueItem } from "@/types/shared";
import RadioGroup from "@/app/components/filter/components/RadioGroup";
import menu from "@/public/assets/menu.svg";
import menuBlack from "@/public/assets/img/menuBlack.svg";
import { useState } from "react";
import { useTranslations } from "next-intl";

function AsideMenu({ lang, iconColor }: { lang: string; iconColor?: string }) {
  const [open, setOpen] = useState(false);

  const t = useTranslations("Header");

  const menuItems: NavbarMenueItem[] = [
    { value: t("home"), path: "/" },
    { value: t("whoWeAre"), path: "/who-we-are" },
    { value: t("products"), path: "#products" },
    { value: t("doorDesign"), path: "/design-door" },
    { value: t("ourPartners"), path: "#our-partners" },
    { value: t("ourProjects"), path: "/projects" },
    { value: t("blogs"), path: "#blogs" },
    { value: t("contactUs"), path: "/contact-us" },
    // { value: t("profile"), path: "/profile" },
    // { value: t("myAccount"), path: "/my-account" },
  ];

  return (
    <>
      {/* menu icon */}
      <div className="flex xl:hidden items-center gap-[20px] text-base mr-3 md:mr-7">
        <div
          className="flex items-center justify-center gap-5 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Image
            className="w-[20px] h-[20px]"
            src={iconColor === "black" ? menuBlack : menu}
            width={20}
            height={20}
            alt="currency"
          />
        </div>
        {/* <ul className="flex  gap-6 items-center ">
                                {menuItems?.map((item: NavbarMenueItem) => (
                                    <li key={item?.value}>
                                        <Link href={item.path}>{item.value}</Link>
                                    </li>
                                ))}
                            </ul> */}
      </div>

      {/* aside*/}
      <div
        className={`[&_*]:!text-black fixed top-0 left-0 w-[calc(100%-150px)] max-w-[350px] h-full bg-white backdrop-blur-sm z-50 flex justify-center items-center duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="absolute top-5 left-5 flex gap-3 items-center justify-center cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <span>x</span> close
        </div>
        <div className="flex flex-col gap-6 items-center w-full px-8 text-xl font-medium">
          {" "}
          <ul className="flex flex-col gap-6 items-end pb-6 w-full">
            {menuItems?.map((item: NavbarMenueItem) => (
              <li key={item?.value} onClick={() => setOpen(false)}>
                <MainLink
                  locale={lang}
                  href={item.path}
                  className="text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.value}
                </MainLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {open && (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000000]/20 z-10 duration-500`}
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}

export default AsideMenu;
