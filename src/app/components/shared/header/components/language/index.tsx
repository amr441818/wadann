"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import langIcon from "@/public/assets/img/translate.svg"
import langIconBlack from "@/public/assets/img/translateBlack.svg"

const Languge = ({ iconColor }: { iconColor?: string }) => {
    const t = useTranslations("Header")
    const router = useRouter()
    const pathname = usePathname()
    const changeLanguage = (locale: string) => {
        const newPath = `/${locale}${pathname.replace(/^\/(en|fr)/, "")}` // Adjust based on locales
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
                        <SelectValue placeholder={pathname.split("/")[1] === "en" ? "EN" : "FR"} />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    {" "}
                    <SelectItem value="en">{t("english")}</SelectItem>
                    <SelectItem value="fr">{t("french")}</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}

export default Languge
