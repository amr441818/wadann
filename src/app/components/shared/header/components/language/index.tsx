"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { usePathname, useRouter } from "next/navigation"

import Image from "next/image"
import langIcon from "@/public/assets/img/translate.svg"
import langIconBlack from "@/public/assets/img/translateBlack.svg"
import { useTranslations } from "next-intl"

const Languge = ({ iconColor }: { iconColor?: string }) => {
    const t = useTranslations("Header")
    const router = useRouter()
    const pathname = usePathname()
    const changeLanguage = (locale: string) => {
        const newPath = `/${locale}${pathname.replace(/^\/(en|ar)/, "")}` // Adjust based on locales
        router.push(newPath)
    }

    return (
        <>
            {" "}
            <Select onValueChange={changeLanguage}>
                <SelectTrigger className="border-none outline-none bg-transparent focus:ring-0 shadow-none w-fit p-0">
                    <div className="flex items-center gap-2">
                        <Image
                            className="w-[20px] h-[20px]"
                            src={iconColor === "black" ? langIconBlack : langIcon}
                            width={20}
                            height={20}
                            alt="currency"
                        />{" "}
                        <SelectValue placeholder={pathname.split("/")[1] === "en" ? "EN" : "AR"} />
                    </div>
                </SelectTrigger>
                <SelectContent className="z-[99]">
                    {" "}
                    <SelectItem value="en">{t("english")}</SelectItem>
                    <SelectItem value="ar">{t("arabic")}</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}

export default Languge
