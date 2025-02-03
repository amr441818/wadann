"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import langIcon from "@/public/assets/img/translate.svg";
import langIconBlack from "@/public/assets/img/translateBlack.svg";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Language = ({ iconColor }: { iconColor?: string }) => {
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  
  // Get the current locale from the pathname
  const currentLocale = pathname.split("/")[1] === "ar" ? "ar" : "en";

  // Store selected language in state
  const [locale, setLocale] = useState(currentLocale);

  const changeLanguage = (newLocale: string) => {
    if (newLocale === locale) return; // Avoid unnecessary updates
    const newPath = `/${newLocale}${pathname.replace(/^\/(en|ar)/, "")}`;
    router.push(newPath);
    setLocale(newLocale);
  };

  // Update document direction when locale changes
  useEffect(() => {
    document.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <Select onValueChange={changeLanguage}>
      <SelectTrigger className="border-none outline-none bg-transparent focus:ring-0 shadow-none w-fit p-0">
        <div className="flex items-center gap-2">
          <Image
            className="w-[20px] h-[20px]"
            src={iconColor === "black" ? langIconBlack : langIcon}
            width={20}
            height={20}
            alt="language"
          />
          <SelectValue placeholder={locale.toUpperCase()} />
        </div>
      </SelectTrigger>
      <SelectContent className="z-[99]">
        <SelectItem value="en"><a href="">{t("english")}</a></SelectItem>
        <SelectItem value="ar"><a href="">{t("arabic")}</a></SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Language;
