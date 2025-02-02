"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function WhatsApp({link}: {link: string}) {
  return (
    <Link href={link} className="fixed bottom-4 right-4 flex gap-5 flex-col z-[999]">
      <div className="bg-primary hover:bg-black/80 p-3 rounded-full duration-300">
        <Icon className="text-white text-3xl" icon="hugeicons:whatsapp" />
      </div>
    </Link>
  );
}

export default WhatsApp;
