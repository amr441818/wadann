"use client";

import { Icon } from "@iconify/react";
import MainLink from "./main-link";
import React from "react";

function FixedSocial() {
  return (
    <div className="fixed bottom-[50%] left-0 flex flex-col flex-wrap gap-4 px-3 py-5 rounded-r-2xl shadow-2xl bg-white z-[99]">
      <MainLink
        className="border border-primary rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center group hover:bg-primary duration-300"
        locale={"ar"}
        href="home"
      >
        <Icon icon="basil:whatsapp-outline" className="text-primary group-hover:text-white duration-300" />
      </MainLink>
      <MainLink
        className="border border-primary rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center group hover:bg-primary duration-300"
        locale={"ar"}
        href="home"
      >
        <Icon icon="ic:outline-snapchat" className="text-primary group-hover:text-white duration-300" />
      </MainLink>
      {/* <MainLink
        className="border border-primary rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
        locale={"ar"}
        href="home"
      >
        <Icon icon="hugeicons:instagram" className="text-primary group-hover:text-white duration-300" />
      </MainLink> */}
      <MainLink
        className="border border-primary rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center group hover:bg-primary duration-300"
        locale={"ar"}
        href="home"
      >
        <Icon icon="pajamas:twitter" className="text-primary group-hover:text-white duration-300" />
      </MainLink>
      <MainLink
        className="border border-primary rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center group hover:bg-primary duration-300"
        locale={"ar"}
        href="home"
      >
        <Icon icon="ph:tiktok-logo" className="text-primary group-hover:text-white duration-300" />
      </MainLink>
    </div>
  );
}

export default FixedSocial;
