"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import MainLink from "./main-link";
import React from "react";

function FixedSocial(params: any) {
  const myObject = {};

  for (let i = 0; i < params?.data?.socials?.length; i++) {
    /* @ts-ignore */
    myObject[params?.data?.socials[i]?.key] = params?.data?.socials[i]?.value;
  }

  return (
    <div className="fixed bottom-[50%] left-0 flex flex-col flex-wrap gap-4 px-3 py-5 rounded-r-2xl shadow-2xl bg-white z-[90]">
      <Link
        className="border border-primary rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center group hover:bg-primary duration-300"
        /* @ts-ignore */
        href={myObject?.whatsapp || "home"}
      >
        <Icon
          icon="basil:whatsapp-outline"
          className="text-primary group-hover:text-white duration-300"
        />
      </Link>
      <Link
        className="border border-primary rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center group hover:bg-primary duration-300"
        /* @ts-ignore */
        href={myObject?.snapchat || "home"}
      >
        <Icon
          icon="ic:outline-snapchat"
          className="text-primary group-hover:text-white duration-300"
        />
      </Link>
      {/* <MainLink
        className="border border-primary rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center"
        
        href="home"
      >
        <Icon icon="hugeicons:instagram" className="text-primary group-hover:text-white duration-300" />
      </MainLink> */}
      <Link
        className="border border-primary rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center group hover:bg-primary duration-300"
        /* @ts-ignore */
        href={myObject?.instagram || "home"}
      >
        <Icon
          icon="hugeicons:instagram"
          className="text-primary group-hover:text-white duration-300"
        />
      </Link>
      <Link
        className="border border-primary rounded-full p-2 w-[33px] h-[33px] flex items-center justify-center group hover:bg-primary duration-300"
        /* @ts-ignore */
        href={myObject?.facebook || "home"}
      >
        <Icon
          icon="ic:baseline-facebook"
          className="text-primary group-hover:text-white duration-300"
        />
      </Link>
    </div>
  );
}

export default FixedSocial;
