"use client";

import { useEffect, useState } from "react";

import AsideMenu from "./components/aside-menu";

import Container from "../container";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Language from "./components/language";
import { Link } from "@/i18n/routing";
import { NavbarMenueItem } from "@/types/shared";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import apiServiceCall from "@/utils/api/shared/apiServiceCall";

const Header = ({ lang, catalog }: { lang: string; catalog: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // const [dropDownItems, setDropDownItems] = useState(null);

  const { data: pagesData } = useQuery({
    queryKey: ["pages"],
    queryFn: () =>
      apiServiceCall({
        url: `pages`,
        method: "GET",
        headers: { "Accept-Language": lang },
      }),
    select: (data) =>
      data?.data?.map((item) => ({
        value: item?.title,
        image: item?.image,
        path: `/pages/${item?.id}`,
      })),
  });

  console.log("dataaaaa", pagesData);

  const t = useTranslations("Header");
  const menuItems: NavbarMenueItem[] = [
    { value: t("home"), path: `/` },
    { value: t("whoWeAre"), path: "/who-we-are" },
    { value: t("products"), path: "/#products" },
    { value: t("doorDesign"), path: "/categories" },
    { value: t("ourProjects"), path: "/projects" },
    { value: t("ourPartners"), path: "/#our-partners" },
    { value: t("blogs"), path: "/#blogs" },
    { value: t("contactUs"), path: "/contact-us" },
    {
      value: t("pages"),
      onClick: () => {
        setOpen((prev) => !prev);

        // setDropDownItems([...pagesData]);
      },
    },
  ];

  const pathname = usePathname();
  console.log(pathname);
  let place = pathname.split("/").pop();

  // // @ts-ignore

  if (place != lang) {
    delete menuItems[2];
    delete menuItems[4];
    delete menuItems[5];
    delete menuItems[6];
  } else {
    console.log(" this");
  }

  let logoPath =
    place === "contact-us"
      ? "/logoGold.svg"
      : place === "developer"
      ? "/logoGold.svg"
      : "/logo.png";

  const isSingleBlog =
    pathname.includes("blogs") && place !== undefined && place !== "blogs";

  if (isSingleBlog) {
    place = "single-blog";

    logoPath = "/logoBlack.svg";
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-transparent pb-4 bg-white text-black pt-1 max-h-[105px] fixed w-full z-[99] px-5 lg:px-0 top-0`}
    >
      <Container>
        <nav className="flex items-center justify-between ">
          {/* logo */}
          <Link href="/">
            <Image
              src={"/logo.png"}
              width={100}
              height={100}
              alt={"logo"}
              className="h-[70px] w-[70px]"
              priority
            />
          </Link>

          {/* links */}
          <div>
            <ul className="hidden xl:flex items-center gap-4 w-full md:px-5 text-paragText">
              {menuItems?.map((item) => (
                <li key={item?.value} className="hover:text-primary">
                  {item?.onClick ? (
                    <div className="relative">
                      <button type="button" onClick={item?.onClick}>
                        {item?.value}
                      </button>

                      {open && (
                        <ul className="absolute top-[50px] w-[200px] left-[-100px] bg-white rounded-md border border-primary">
                          {pagesData?.map((item) => (
                            <li
                              key={item?.value}
                              className="py-2 px-3 hover:bg-primary hover:text-white text-primary"
                            >
                              <Link
                                href={item?.path}
                                locale={lang}
                                className={`
                    ${
                      item?.path === `/${place}` ||
                      `${item?.path}${lang}` === `/${place}`
                        ? "unique-h after:border-b-2 text-[16px] text-primary font-bold ltr:after:border-l-2 rtl:after:border-r-2 after:w-[20px] after:h-[18px]"
                        : ""
                    }
                    text-[16px] font-medium 
                    `}
                              >
                                {item?.value}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item?.path}
                      locale={lang}
                      className={`
                    ${
                      item?.path === `/${place}` ||
                      `${item?.path}${lang}` === `/${place}`
                        ? "unique-h after:border-b-2 text-[16px] text-primary font-bold ltr:after:border-l-2 rtl:after:border-r-2 after:w-[20px] after:h-[18px]"
                        : ""
                    }
                    text-[16px] font-medium 
                    `}
                    >
                      {item?.value}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center">
            {" "}
            {/* language */}
            <div className="flex items-center justify-end gap-4 w-fit">
              <Language iconColor={"black"} />
              {/* <Currencies iconColor={"black"} /> */}
              {/* <Button className="bg-initialBg px-10 text-primary h-[44px] border border-primary">
                            {t("register")}
                        </Button>
                        <Button className="bg-primaryBg px-10 text-initial h-[44px]">{t("login")}</Button> */}
            </div>
            <a
              href={`${catalog}`}
              download
              rel="noopener noreferrer"
              target="_blank"
              className="bg-primary text-white flex items-center gap-2 px-3 md:px-5 py-2 mr-2 md:mr-3 "
            >
              <Icon icon="material-symbols:download-rounded" />
              <span
                className="whitespace-nowrap hidden sm:inline-block
              "
              >
                {t("downloadCatalog")}
              </span>
            </a>
            {/* aside menu */}
            <AsideMenu iconColor="black" lang={lang} />
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
