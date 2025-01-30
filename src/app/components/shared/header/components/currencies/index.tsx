"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { usePathname, useRouter } from "next/navigation"

import Image from "next/image"
import currency from "@/public/assets/currency.svg"
import currencyBlack from "@/public/assets/img/currencyBlack.svg"
import { useTranslations } from "next-intl"

const Currencies = ({ iconColor }: { iconColor?: string }) => {
    const t = useTranslations("Header")
    const router = useRouter()
    const pathname = usePathname()
    const changeCurrency = (locale: string) => {
        console.log("change currency and save it in local storage")
        // const newPath = `/${locale}${pathname.replace(/^\/(en|fr)/, "")}` // Adjust based on locales
        // router.push(newPath)
    }

    return (
        <>
            {" "}
            <Select onValueChange={changeCurrency}>
                <SelectTrigger className="border-none outline-none bg-transparent focus:ring-0 shadow-none w-fit p-0">
                    <div className="flex items-center gap-2">
                        <Image
                            className="w-[20px] h-[20px]"
                            src={iconColor === "black" ? currencyBlack : currency}
                            width={20}
                            height={20}
                            alt="currency"
                        />{" "}
                        <SelectValue placeholder={"in_local_storage" === "in_local_storage" ? "USD" : "USD"} />
                    </div>
                </SelectTrigger>
                <SelectContent className="z-[99]">
                    {" "}
                    <SelectItem value="en">{t("c1")}</SelectItem>
                    <SelectItem value="ar">{t("c2")}</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}

export default Currencies
